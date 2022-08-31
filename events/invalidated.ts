import { BaseInteraction } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'invalidated'
};

const listenerFunction = () => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log('Invalidated.');
}

export default new Event(eventConfig, listenerFunction);