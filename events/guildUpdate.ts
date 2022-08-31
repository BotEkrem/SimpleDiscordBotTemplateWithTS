import { Guild } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildUpdate'
};

const listenerFunction = (oldGuild: Guild, newGuild: Guild) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldGuild);
    console.log(newGuild);
}

export default new Event(eventConfig, listenerFunction);