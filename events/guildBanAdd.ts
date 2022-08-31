import { GuildBan } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildBanAdd'
};

const listenerFunction = (ban: GuildBan) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(ban)
}

export default new Event(eventConfig, listenerFunction);