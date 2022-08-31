import { User } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'userUpdate'
};

const listenerFunction = (oldUser: User, newUser: User) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldUser);
    console.log(newUser);
}

export default new Event(eventConfig, listenerFunction);