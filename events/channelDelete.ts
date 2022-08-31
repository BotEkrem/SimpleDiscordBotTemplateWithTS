import { GuildChannel, DMChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'channelDelete'
};

const listenerFunction = (channel: GuildChannel | DMChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(channel);
}

export default new Event(eventConfig, listenerFunction);