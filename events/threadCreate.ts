import { ThreadChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'threadCreate'
};

const listenerFunction = (thread: ThreadChannel, newlyCreated: Boolean) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(thread);
    console.log(newlyCreated);
}

export default new Event(eventConfig, listenerFunction);