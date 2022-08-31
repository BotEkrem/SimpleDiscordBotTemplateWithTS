import { ThreadChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'threadUpdate'
};

const listenerFunction = (oldThread: ThreadChannel, newThread: ThreadChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldThread);
    console.log(newThread);
}

export default new Event(eventConfig, listenerFunction);