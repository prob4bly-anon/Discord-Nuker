#!/usr/bin/node
require('dotenv').config({encoding: 'utf-8'})
const fs = require("fs");
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
client.commands = new Collection();
client.aliases = new Collection();
const { guildName, roleName, roleName2, guildIcon,
  channelName, superuser, botToken, prefix } = require("./config.js")

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user
  .setActivity(
    `Servers : ${await client.guilds.cache.size} | Users : ${await client
      .users.cache.size}   `,
    { type: "STREAMING", url: 'https://twitch.tv/dreams' }
  )
  /*
  client.user.setPresence({
    activities: [{
      name: "Hello World..",
      type: "CUSTOM"
    }],
    status: "dnd"
  })*/
})

if (!guildName || !roleName || !guildIcon || !channelName || !superuser) {
  console.warn("Not enough details in config file, aborting...")
  process.abort()
}

client.on("messageCreate", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`Bot Prefix : ${prefix}`);
  }
});

fs.readdir(`./commands/`, function (err, files) {
  if (err)
    return new Error(
      "Missing Folder Of Commands! Example : Commands/<Command>.js"
    );
  files.forEach(function (file) {
    if (!file.endsWith(".js")) return;
    let command = require(`./commands/${file}`);
    console.log(`${command.name} Command Has Been Loaded - ✅`);
    if (command.name) client.commands.set(command.name, command);
    if (command.aliases) {
      command.aliases.forEach(alias =>
        client.aliases.set(alias, command.name)
      );
    }
    if (command.aliases.length === 0) command.aliases = null;
  });
});
client.on("messageCreate", async message => {
  if (!superuser.includes(message.author.id)) return;
  if (!message.content.startsWith(prefix)) return;
  const args = (message.content)
    .slice(prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) {
    if (!message.guild.members.me.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands | Require : Administrator"
      );
    command.run(client, message, args);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
});

client.login(process.env.TOKEN || botToken);