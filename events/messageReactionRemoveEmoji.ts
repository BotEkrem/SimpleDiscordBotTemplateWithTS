import { MessageReaction, User } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageReactionRemoveEmoji'
};

const listenerFunction = (reaction: MessageReaction) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(reaction);
}

export default new Event(eventConfig, listenerFunction);