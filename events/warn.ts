import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'warn'
};

const listenerFunction = (info: string) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(info);
}

export default new Event(eventConfig, listenerFunction);