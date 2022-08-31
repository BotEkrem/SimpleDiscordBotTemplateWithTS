import { Message, Collection, Snowflake, MessageReaction } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageReactionRemoveAll'
};

const listenerFunction = (message: Message, reactions: Collection<(string | Snowflake), MessageReaction>) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(message);
    console.log(reactions);
}

export default new Event(eventConfig, listenerFunction);