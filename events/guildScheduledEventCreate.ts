import { GuildScheduledEvent } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildScheduledEventCreate'
};

const listenerFunction = (guildScheduledEvent: GuildScheduledEvent) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(guildScheduledEvent);
}

export default new Event(eventConfig, listenerFunction);