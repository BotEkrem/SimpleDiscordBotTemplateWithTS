import Discord, { GatewayIntentBits, Message } from 'discord.js';
import jetpack from 'fs-jetpack';
import { Command } from "./classes/Command";
import { Event } from './classes/Event';

const client = new Discord.Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildScheduledEvents
  ]
});

client.prefix = "!";
client.commands;
client.events;

client.on("ready", async () => {
  // When client is ready, the bot is triggering all registration functions.
  client.commands = await setCommands();
  client.events = await setEvents();
  console.log(`Logged in as ${client.user.tag}!`);
});

// Registering all commands from "commands" folder to client.commands collection

async function setCommands(): Promise<Discord.Collection<String, Command>> {
  const commandFiles = jetpack.find("commands", {
    matching: "*.ts",
  });

  let commands = new Discord.Collection<String, Command>();

  commandFiles.forEach((v: String, i: Number) => {
    let command = require(`./${v}`).default;
    if (!command || command.constructor.name !== 'Command') throw Error(`Provided objects from "commands" folder are must be "Command" class. - ${v}`);
    commands.set(v, command);
    console.log(`Command from "${v}" successfully loaded.`);
  });

  return commands;
}

// Registering all events from "events" folder to client.events collection and client listeners

async function setEvents(): Promise<Discord.Collection<String, Event>> {
  const commandFiles = jetpack.find("events", {
    matching: "*.ts",
  });

  let events = new Discord.Collection<String, Event>();

  commandFiles.forEach((v: String, i: Number) => {
    let event = require(`./${v}`).default;
    if (!event || event.constructor.name !== 'Event') throw Error(`Provided objects from "events" folder are must be "Event" class. - ${v}`);
    client.on(event.config.name, (...args) => event.run(...args));
    events.set(v, event);
    console.log(`Event from "${v}" successfully loaded.`);
  });

  return events;
}

// Handling messages for commands

client.on("messageCreate", (message: Message) => {
  if (
    message.content.startsWith(client.prefix) &&
    message.content.split(" ")[0] != client.prefix
  ) {
    let commandName = message.content.split(" ")[0].replace(client.prefix, "");

    let command = client.commands.find(
      (v: Command) => v.config.title == commandName || v.config.aliases.includes(commandName)
    );

    if (command) {
      let args = message.content.split(" ");
      args = args.slice(1, args.length);
      command.run(client, message, args);
    }
  }
});

// Enter bot token to string param

client.login("token");
