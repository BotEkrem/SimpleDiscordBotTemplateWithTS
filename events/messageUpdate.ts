import { Message } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageUpdate'
};

const listenerFunction = (oldMessage: Message, newMessage: Message) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldMessage);
    console.log(newMessage);
}

export default new Event(eventConfig, listenerFunction);