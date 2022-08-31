import { GuildEmoji } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'emojiUpdate'
};

const listenerFunction = (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldEmoji);
    console.log(newEmoji);
}

export default new Event(eventConfig, listenerFunction);