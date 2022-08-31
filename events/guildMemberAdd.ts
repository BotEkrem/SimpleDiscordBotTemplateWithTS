import { GuildMember } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildMemberAdd'
};

const listenerFunction = (member: GuildMember) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(member)
}

export default new Event(eventConfig, listenerFunction);