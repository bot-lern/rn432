/*RAVANA*/

const RAVANA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');

const code = ('𝙰\n𝙽\n𝚃\n𝙸\n𝕊\nℙ\n𝔸\nᴍ\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*☮️RAVANA☮️*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nමෙම කේතය ඔබගේ දුරකථනය හදිසි ස්පෑම් එල්ල වීමකදි  සිරවිම වලකාලයි"
const TMUTE = "Trying to close temporary,\nතාවකාලිකව සමුහය වැසීමට උත්සාහ කිරීම (මම 𝕒𝕕𝕞𝕚𝕟නම් වැහෙයි)"
const MUT = ".mute"
const SCXR = "දැන් antispam එක ක්‍රියාත්මක වෙමින් පවතී...."
RAVANA.addCommand({pattern: 'antispam', fromMe: true, deleteCommand: true, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('Preforming🛠....');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);
          

  }));
