import { Sticker } from "discord.js";
import { Event } from "../classes/Event";
import { EventConfig } from "../classes/EventConfig";

let eventConfig: EventConfig = {
    name: 'stickerUpdate'
};

const listenerFunction = (oldSticker: Sticker, newSticker: Sticker) => {
    console.log(`Event "${eventConfig.name}" triggered.`)
    console.log(oldSticker);
    console.log(newSticker);
}

export default new Event(eventConfig, listenerFunction);