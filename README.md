# Simple Discord Bot Template With TS

The template made for beginners of Typescript and Discord.js by [BotEkrem](https://github.com/BotEkrem)

## Intents and Token

- You must activate all required intents from [Discord Developer Portal](https://discord.com/developers/applications)
- Replace client.login("token") to your bot token in index.ts 

## Installation

- Firstly clone the project:

```
git clone https://github.com/BotEkrem/SimpleDiscordBotTemplateWithTS.git
cd SimpleDiscordBotTemplateWithTS
```

- Install "typescript", "nodemon" and "ts-node":

```
npm install typescript
npm install -g nodemon ts-node
```

- Install dependencies:

```
npm install
```

- After this steps, to run the bot:

```
npm run start
```

## Examples

### For commands (_commands/test.ts_):

```js
import { Command } from "../classes/Command"; // Import Command class from "classes" folder
import { CommandConfig } from "../classes/CommandConfig"; // Import CommandConfig class from "classes" folder
import { Client, Message } from "discord.js"; // Imports for type definitions

// Command Config Object

let commandConfig: CommandConfig = {
  title: "test", // Command name
  description: "Test Command", // Command description for potential guide commands
  category: "Tests", // Command description for potential grouping
  aliases: ["test2", "test3"], // Aliases of command name
};

// Command Function

const command = (client: Client, message: Message, args: Array<String>) => {
  message.reply("Test command.");
};

// You must export your command as a Command class

export default new Command(commandConfig, command);
```

### For events (_events/messageCreate.ts_):

```js
import { Message } from "discord.js"; // Imports for type definitions
import { Event } from "../classes/Event"; // Import Event class from "classes" folder
import { EventConfig } from "../classes/EventConfig"; // Import EventConfig class from "classes" folder

// Event Config Object

let eventConfig: EventConfig = {
  name: "messageCreate", // Event name
};

// Event Function

const listenerFunction = (message: Message) => {
  console.log(`Event "${eventConfig.name}" triggered.`);
  console.log(message);
};

// You must export your event as a Event class

export default new Event(eventConfig, listenerFunction);
```
