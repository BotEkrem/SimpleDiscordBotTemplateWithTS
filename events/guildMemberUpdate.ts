import { GuildMember } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'guildMemberUpdate'
};

const listenerFunction = (oldMember: GuildMember, newMember: GuildMember) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldMember);
    console.log(newMember);
}

export default new Event(eventConfig, listenerFunction);