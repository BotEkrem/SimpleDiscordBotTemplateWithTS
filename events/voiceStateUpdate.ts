import { VoiceState } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'voiceStateUpdate'
};

const listenerFunction = (oldState: VoiceState, newState: VoiceState) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldState);
    console.log(newState);
}

export default new Event(eventConfig, listenerFunction);