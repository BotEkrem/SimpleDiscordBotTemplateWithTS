import { Role } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'roleDelete'
};

const listenerFunction = (role: Role) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(role);
}

export default new Event(eventConfig, listenerFunction);