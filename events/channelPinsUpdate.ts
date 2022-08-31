import { TextBasedChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'channelPinsUpdate'
};

const listenerFunction = (channel: TextBasedChannel, time: Date) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(channel);
    console.log(time);
}

export default new Event(eventConfig, listenerFunction);