// Load required resources =================================================================================================
const { SlashCommandBuilder } = require('discord.js');

// Module script ===========================================================================================================
module.exports = {
    data: new SlashCommandBuilder()
        .setName('acercade')
        .setDescription('Acerca del bot')
        .setDMPermission(false),
    async execute(interaction) {
        try {
            return interaction.reply({ embeds: [{
                color: 0x4f30b3,
                title: '🐌 CfxRe Monitor',
                description:
                    "`🤖` Bot para conocer el estado de los servicios de cfx.re.\n\n"+
                    "`⭕` Podrás ver de forma rápida el estado de los servicios según el estado del bot.\n\n"+
                    "`💬` Para conocer mas detalles se encuentra disponible el comando `/cfx`.\n\n\n"+
                    "> **Desarrollado por:** <@377052236909379585>",
            }] });
        } catch(error) {
            console.error(`[cmd:slash:acercade] ${error.message}`);
            return message.reply('`[cmd:slash:acercade]` error: '+error.message);
        }
    }
};