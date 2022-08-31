import { ApplicationCommandPermissionsUpdateData } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'applicationCommandPermissionsUpdate'
};

const listenerFunction = (data: ApplicationCommandPermissionsUpdateData) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(data);
}

export default new Event(eventConfig, listenerFunction);