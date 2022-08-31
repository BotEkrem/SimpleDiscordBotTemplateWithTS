import { Command } from "../classes/Command"; // Import Command class from "classes" folder
import { CommandConfig } from "../classes/CommandConfig"; // Import CommandConfig class from "classes" folder
import { Client, Message } from "discord.js"; // Imports for type definitions

// Command Config Object

let commandConfig: CommandConfig = {
   title: 'test', // Command name
   description: 'Test Command', // Command description for potential guide commands
   category: 'Tests', // Command description for potential grouping
   aliases: ['test2', 'test3'] // Aliases of command name
};

// Command Function

const command = (client: Client, message: Message, args: Array<String>) => {
   message.reply('Test command.');
};

// You must export your command as a Command class

export default new Command(commandConfig, command);
