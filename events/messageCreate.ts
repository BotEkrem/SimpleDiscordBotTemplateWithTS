import { Message } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageCreate'
};

const listenerFunction = (message: Message) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(message);
}

export default new Event(eventConfig, listenerFunction);