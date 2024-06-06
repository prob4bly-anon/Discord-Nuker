const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "set",
    aliases: [],
    description: "sets game, watching, listening or streaming. also sets new name & avatar.",
    usage: "set (game | watching | listening | streaming | name | avatar) argument",
    run: async (client, message, args) => {
        message.delete()
        if (args[1] == undefined) return message.channel.send('Please provide a second response!');
        const argument = args[1];
        switch (args[0]) {

            case 'game' || 'g':
                client.user.setActivity(argument);
                break;
            case 'watching' || 'w':
                client.user.setActivity(argument, { type: "WATCHING" });
                break;
            case 'listening' || 'g':
                client.user.setActivity(argument, { type: "LISTENING" });
                break;
            case 'streaming' || 's':
                client.user.setActivity(argument, { type: "STREAMING", url: "https://www.twitch.tv/dream" });
                break;
            case 'name':
                client.user.setUsername(argument)
                break;
            case 'avatar' || 'ava':
                client.user.setAvatar(argument);
                break;
            case undefined:
                message.channel.send('No option specified.')
                break;
            default:
                break;
        }

    }
};