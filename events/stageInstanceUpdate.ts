import { StageInstance } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'stageInstanceUpdate'
};

const listenerFunction = (oldStageInstance: StageInstance, newStageInstance: StageInstance) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldStageInstance);
    console.log(newStageInstance);
}

export default new Event(eventConfig, listenerFunction);