import { GuildChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'channelCreate'
};

const listenerFunction = (channel: GuildChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(channel);
}

export default new Event(eventConfig, listenerFunction);