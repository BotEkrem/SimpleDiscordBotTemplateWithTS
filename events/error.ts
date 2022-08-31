import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'error'
};

const listenerFunction = (error: Error) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    throw error;
}

export default new Event(eventConfig, listenerFunction);