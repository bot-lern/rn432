/* # Exclusively from RAVANA
# Do not use this fore any commercial thing
# Do not edit (Respect to the Devaoloper) 
# All rights reserved RAVANA Wa.me/+94714898434
# Credit : RAVANA
උස්සන එකාට හොදක් වෙන්න එපා
*/

const RAVANA  = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config');
const HELP = "Bot help Center"


if (Config.LANGUAGE == 'EN') { 

    RAVANA.addCommand({pattern: 'rhelp', fromMe: true, deleteCommand: true, desc: HELP,}, (async (message, match) => {

        await message.sendMessage("*🇱🇰HELLOW THIS IS RAVANA HELP CENTER🇱🇰* \n\n✨What's Your Problem \n\n\n▶මොකක්ද මේ RAVANA BOT කියන්නේ(.1) \n\n▶Song videos are not coming(.2)\n\n▶Logo does not work(.3)\n\n▶Alive does not work(.4)\n\n▶How to turn on after shutdown(.5) \n\n▶What if the bot suddenly stops working?(.6)\n\n▶How to take bot commands(.7) \n\n▶Bot's command why we do not work(.8) \n\n▶Update To do(.9)\n\n▶How to change the language(.10)\n\n▶Other(.11) \n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("* RAVANA BOT is a Whatsapp Bot. \n\n * What can be done with this? * \ n⭕You can download songs and videos through WhatsApp. 100 logos There are two logo packs, one is rpack (.rpack) and the other is rnpack (.rnpack) \ nMake a sticker, make a sticker, make a photo sticker \ nThere are many more. If you hit it, it will not come. If your bot is public, call it someone else) \ n \ n * Remember, your data will not be cut for this, it is only because you auto downloaded on \n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰 ");
    
    }));
    RAVANA.addCommand({pattern: '2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*Please restart your bot.* \n\n .restart \n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*It's not our problem because it's the limit of the logo site* \n\nNow there is a solution.\n\n```You can change that logo api```\n\n.setvar XTEAM_API:api key \n\n .setvar LOLUHUMAN_API:api key \n\n\nHow to get that api is in this video.\n https://youtu.be/vGHpome5e3k\n\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '4', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*If your alive one is not working then you can change the alive logo and that link is incorrect*\n\net the link exactly\nsite is telegra.ph\n\n 🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '5', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*When you shut down the bot you must go to heroku and turn on the Resources key again.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '6', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*All you have to do is go back to heroku and press restart all dyno.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '7', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*put .ravana or .help on the bot.*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '8', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*If your bot is public it will not work for you and work for others* \n\nHow to private it\n.setvar WORK_TYPE:private\n\nනැවත public කිරීමට\n .setvar WORK_TYPE:public\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '9', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*Update now?*\n```The biggest problem for you is that Update now us to update from our supported group. But there is a better Update before you go to bed.``` \n*Way than that Says*\n★because meny update come on day and you will get bored of the bot as you continue to come😒\n★Another error will come update so the best solution is to update yourself before going to bed\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '10', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*How do you change the language if you already have a bot?*\n.setvar LANGUAGE:en or si.|||en is english / si is sinhala\n\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
    RAVANA.addCommand({pattern: '11', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
    
        await message.sendMessage("*Your problem tell our  whatsapp suppoted group https://chat.whatsapp.com/BZxwFPt5pUe19Y4EW9DjDP or This number wa.me/94756872976*\n\n🥰Thank you for using RAVANA HELP CENTER🇱🇰");
    
    }));
}

