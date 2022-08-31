import { GuildScheduledEvent } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildScheduledEventUpdate'
};

const listenerFunction = (oldGuildScheduledEvent?: GuildScheduledEvent, newGuildScheduledEvent?: GuildScheduledEvent) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldGuildScheduledEvent);
    console.log(newGuildScheduledEvent);
}

export default new Event(eventConfig, listenerFunction);