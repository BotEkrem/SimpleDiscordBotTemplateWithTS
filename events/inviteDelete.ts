import { Invite } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'inviteDelete'
};

const listenerFunction = (invite: Invite) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(invite);
}

export default new Event(eventConfig, listenerFunction);