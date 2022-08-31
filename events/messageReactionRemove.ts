import { MessageReaction, User } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageReactionRemove'
};

const listenerFunction = (messageReaction: MessageReaction, user: User) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(messageReaction);
    console.log(user);
}

export default new Event(eventConfig, listenerFunction);