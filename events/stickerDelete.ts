import { Sticker } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'stickerDelete'
};

const listenerFunction = (sticker: Sticker) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(sticker);
}

export default new Event(eventConfig, listenerFunction);