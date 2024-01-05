const Discord = module.require("discord.js");
var deaths = [
  "[NAME1] ran over [NAME2] with a School Bus! :bus:",
  "[NAME1] poisoned [NAME2]’s candy bar",
  "[NAME2] swallowed a grenade",
  "[NAME1] sent John Wick to kill [NAME2]!",
  "[NAME1] pressed Ctrl+Alt+Del deleting [NAME2] from the Universe!",
  "[NAME1] threw the ban hammer at [NAME2] for spamming",
  "[NAME2] stepped on a lego brick",
  "[NAME2] couldn't resist how cute [NAME1] is and died!",
  "[NAME2] was killed by a flying potato",
  "[NAME2] drowned in a bathtub while trying to catch a rubber ducky",
  "[NAME2] suffocated while trying to prove that humans can live without oxygen",
  "[NAME2] saw a spider and died of a heart attack",
  "[NAME2] heard that the world is going to end, so they ended themselves",
  "[NAME2] shined a laser pointer at the sun and it reflected back at them",
  "[NAME2] shot themselves to see if the gun was real",
  "[NAME2] tried to prove that hell is real",
  "[NAME2] tried to make a potion that makes them immortal, but it backfired and they died",
  "[NAME2] overdosed on a pill that was supposed to make them smarter",
];


module.exports = {
  name: "kill",
  aliases: [],
  execute: async (client, message, args, data, db) => {
    let member = await message.mentions.members.first();

    if (!member) {
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "Mention a valid member of this server!"
        }
      })
    }

    if (message.author.id === member.id) {
      return await message.channel.send({
        embed: {
          color: 16734039,
          description: "You cant kill yourself!"
        }
      })
    }
    var pickeddeath = deaths[Math.floor(Math.random() * deaths.length)];
    var change1 = pickeddeath.replace("[NAME1]", message.author.username);
    var change2 = change1.replace("[NAME2]", member.displayName);

    await message.channel.send({
      embed: {
        color: 16734039,
        author: {
          name: "Tombstone of " + member.displayName + "!",
          icon_url: member.user.displayAvatarURL
        },
        title: "Cause of Death",
        description: change2
      }
    });
  }
}
module.exports.help = {
  name: "kill",
  description: "Murders a user",
  usage: "kill <user>",
  type: "Fun"
}