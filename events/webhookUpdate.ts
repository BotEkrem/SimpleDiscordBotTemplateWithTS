import { TextChannel, NewsChannel, VoiceChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'webhookUpdate'
};

const listenerFunction = (channel: TextChannel | NewsChannel | VoiceChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(channel);
}

export default new Event(eventConfig, listenerFunction);