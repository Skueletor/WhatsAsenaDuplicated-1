const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

import shortenUrl from "@kulkul/tinyurl-client";

Asena.addCommand({pattern: 'url', fromMe: true}, (async (message, match) => {
    if (match[1] == '') return await message.client.sendMessage(message.jid, 'URL Gerekli!', MessageType.text);

    shortenUrl(`${match[1]}`).then((result) => {
        await message.client.sendMessage(message.jid,'Kısa Link:*' + result); // https://tinyurl.com/<slug>
    });
}));
