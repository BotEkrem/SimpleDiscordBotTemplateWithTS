import { GuildChannel, DMChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'channelUpdate'
};

const listenerFunction = (oldChannel: GuildChannel | DMChannel, newChannel: GuildChannel | DMChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldChannel);
    console.log(newChannel);
}

export default new Event(eventConfig, listenerFunction);