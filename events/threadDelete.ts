import { ThreadChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'threadDelete'
};

const listenerFunction = (thread: ThreadChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(thread);
}

export default new Event(eventConfig, listenerFunction);