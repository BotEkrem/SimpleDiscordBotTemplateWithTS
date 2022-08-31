import { Role } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'roleUpdate'
};

const listenerFunction = (oldRole: Role, newRole: Role) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldRole);
    console.log(newRole);
}

export default new Event(eventConfig, listenerFunction);