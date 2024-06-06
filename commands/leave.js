const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "leave",
  aliases: [],
  description: "leaves the current or all the server the bot is in!",
  usage: "leave [all]",
  run: async (client, message, args) => {
    switch (args[0]) {
      case undefined:
        await message.channel.send("Leaving this guild.")
        message.guild.leave();
        break;
      case 'all':
        const guilds = message.client.guilds.cache.map(guild => guild);
        guilds.forEach(async guild => {
          const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.members.me).has('SEND_MESSAGES'))
         await channel.send(`Time has come. I've to go.`)
            //guild.leave()
            .catch(console.error());
        })
        break;
      default:
        break;
    }
  }
};