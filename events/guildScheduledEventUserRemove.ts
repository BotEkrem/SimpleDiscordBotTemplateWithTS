import { GuildScheduledEvent, User } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildScheduledEventUserRemove'
};

const listenerFunction = (guildScheduledEvent: GuildScheduledEvent, user: User) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(guildScheduledEvent);
    console.log(user);
}

export default new Event(eventConfig, listenerFunction);