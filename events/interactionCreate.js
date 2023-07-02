// Load required resources =================================================================================================
const { Events } = require('discord.js');

// Module script ===========================================================================================================
module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        try {
            if(interaction.isChatInputCommand()) {
                try {
                    const command = interaction.client.interactionsSlash.get(interaction.commandName);
                    if(!command) { return; }

                    await command.execute(interaction);
                } catch(error) {
                    console.error(`[event:interactionCreate:command] ${error.message}`);
                    return interaction.reply({ content: 'oops! hubo un error al ejecutar el evento slash 😣', ephemeral: true });
                }
            }
        } catch(error) {
            console.error(`[event:interactionCreate] ${error.message}`);
        }
    }
}