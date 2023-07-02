// Load required resources =================================================================================================
const path = require('path');

// Load configuration files ================================================================================================
const { botOwner } = require(path.resolve('./config'));

// Module script ===========================================================================================================
exports.run = (client, message, args) => {
    try {
        if(message.author.id != botOwner) { return; }

        message.reply('**🦄 El bot se reiniciará en 2 segundos~**');

        setTimeout(() => { process.exit(); }, 2000);
    } catch(error) {
        console.error(`[cmd:admin:restartbot] ${error.message}`);
        return message.reply('`[cmd:admin:restartbot]` error: '+error.message);
    }
}