import { Message, Snowflake, Collection, GuildTextBasedChannel } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'messageDeleteBulk'
};

const listenerFunction = (messages: Collection <Snowflake, Message>, channel: GuildTextBasedChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(messages);
    console.log(channel);
}

export default new Event(eventConfig, listenerFunction);