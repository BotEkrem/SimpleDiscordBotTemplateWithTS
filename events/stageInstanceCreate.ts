import { StageInstance } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'stageInstanceCreate'
};

const listenerFunction = (stageInstance: StageInstance) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(stageInstance);
}

export default new Event(eventConfig, listenerFunction);