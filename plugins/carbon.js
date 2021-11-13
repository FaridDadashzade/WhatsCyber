/*# Copyright (C) 2021 The CyberSpaceAZ Company LLC.
#
# Licensed under the CyberSpaceAZ Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#
# Thanks github.com/spechide for creating inline bot support.
# WhatsCyber - FaridDadashzade*/

const Cyber = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const dd = "Made by WhatsCyber"
const WhatsCyberStack = require('whatscyber-npm');
const Language = require('../language');
const Lang = Language.getString('log');
let wk = Config.WORKTYPE == 'public' ? false : true

Cyber.addCommand({pattern: 'carbon$', fromMe: wk, desc: Lang.CARBON_DESC}, (async (message, match) => {
    if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.REPLY, MessageType.text);
    var theme_c = await WhatsCyberStack.ctheme()
    var lang_c = await WhatsCyberStack.clang()
    var rgb_c = await WhatsCyberStack.crgb()
    var text = message.reply_message.text
    var fin = text.replace(/(?:\r\n|\r|\n)/g, '%250A')
    var pay = encodeURIComponent(fin)       
    var respoimage = await axios.get('https://thiccyscarbonapi.herokuapp.com/?code=' + pay + '&theme=' + theme_c + '&exportSize=3x&paddingVertical=200px&paddingHorizontal=200px&backgroundColor=rgba(' + rgb_c + ')&language=' + lang_c, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: dd})
}));

