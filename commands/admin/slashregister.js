// Load required resources =================================================================================================
const path = require('path');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

// Load configuration files ================================================================================================
const { botId, botOwner, botToken } = require(path.resolve('./config'))

// Module script ===========================================================================================================
exports.run = (client, message, args) => {
    try {
        if(message.author.id != botOwner) { return; }

        const rest = new REST({ version: '10' }).setToken(botToken);

        rest.put(Routes.applicationCommands(botId), { body: client.slashRegister }).then(() => {
            return message.reply('🦄 Todos los comandos fueron registrados/actualizados!');
        }).catch((error) => {
            console.error(`[cmd:admin:slashregister] ${error.message}`);
            return message.reply(`\`[🦄 cmd:admin:slashregister]\` ${error.message}`);
        });
    } catch(error) {
        console.error(`[cmd:admin:slashregister] ${error.message}`);
        return message.reply('`[cmd:admin:slashregister]` error: '+error.message);
    }
}