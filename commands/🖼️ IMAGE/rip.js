const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "rip",
  aliases: ["dead"],
  execute: async (client, message, args, data, db) => {

    // let AmeAPI = new AmeClient(client.config.imageapi);
    // const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

    // 		const buffer = await AmeAPI.generate("rip", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
    // 		const attachment = new Discord.MessageAttachment(buffer, "approved.png");

    // 		message.channel.send(attachment);
    message.channel.send("This command is currently disabled due to API issues. Please try again later.")
  }
}
module.exports.help = {
  name: "rip",
  description: "Sends a scary photo of mentioned person ",
  usage: "rip",
  type: "Image"
}
