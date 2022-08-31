import { ThreadChannel, Snowflake, Collection, ThreadMember } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'threadMembersUpdate'
};

const listenerFunction = (addedMembers: Collection <Snowflake, ThreadMember>, removedMembers: Collection <Snowflake, ThreadMember>, thread: ThreadChannel) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(addedMembers);
    console.log(removedMembers);
    console.log(thread);
}

export default new Event(eventConfig, listenerFunction);