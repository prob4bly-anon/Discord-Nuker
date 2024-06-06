const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    message.delete();
    const embed = new MessageEmbed()
      .setColor('#fffff')
      .setDescription(`Pong - ${client.ws.ping}ms`)
      .setTimestamp();
    message.channel.send({ embeds: [embed] });
  }
};