import { GuildEmoji } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'emojiCreate'
};

const listenerFunction = (emoji: GuildEmoji) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(emoji);
}

export default new Event(eventConfig, listenerFunction);