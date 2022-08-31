import { Presence } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'presenceUpdate'
};

const listenerFunction = (oldPresence?: Presence, newPresence?: Presence) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldPresence);
    console.log(newPresence);
}

export default new Event(eventConfig, listenerFunction);