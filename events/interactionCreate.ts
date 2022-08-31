import { BaseInteraction } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'interactionCreate'
};

const listenerFunction = (interaction: BaseInteraction) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(interaction);
}

export default new Event(eventConfig, listenerFunction);