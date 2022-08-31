import { Typing } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'typingStart'
};

const listenerFunction = (typing: Typing) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(typing);
}

export default new Event(eventConfig, listenerFunction);