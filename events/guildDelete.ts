import { Guild } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildDelete'
};

const listenerFunction = (guild: Guild) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(guild);
}

export default new Event(eventConfig, listenerFunction);