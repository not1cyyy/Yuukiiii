const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "addmoney",
  aliases: ["addm"],
  execute: async (client, message, args) => {
    var prefix = db.fetch(`guildprefix_${message.guild.id}`);
    if (!prefix) {
      var prefix = ".";
    }

    if (message.author.id == "553317144746655787" || message.author.id == "553317144746655787") {
      let user = message.mentions.members.first();

      if (!user) return message.channel.send({
        embed: {
          color: 16734039,
          description: "You must mention someone to add money!"
        }
      })
      if (isNaN(args[1])) return message.channel.send({
        embed: {
          color: 16734039,
          description: "You must enter the amount of money to add!"
        }
      })
      if (args[0] >= 20000) {
        message.reply("You cant add amount this much more")
        return;
      }

      db.add(`money_${user.id}`, args[1])
      let bal = await db.fetch(`money_${user.id}`)

      let moneyEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Added ${args[1]} coins\n\nNew Balance: ${bal}`);
      message.channel.send(moneyEmbed)
    } else {
      message.channel.send({
        embed: {
          color: 16734039,
          description: "You don't have premission add money!"
        }
      })
    }
  }
}
module.exports.help = {
  name: "addmoney",
  description: "Give money to mentioned user",
  usage: "addmoney <user> <money>",
  type: "Economy"
}