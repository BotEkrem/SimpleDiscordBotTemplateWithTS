import { ThreadChannel, Snowflake, Collection, Guild } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'threadListSync'
};

const listenerFunction = (threads: Collection <Snowflake, ThreadChannel>, guild: Guild) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(threads);
    console.log(guild);
}

export default new Event(eventConfig, listenerFunction);