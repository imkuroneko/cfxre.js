// Load required resources =================================================================================================
const { Events } = require('discord.js');

// Module script ===========================================================================================================
module.exports = {
    name: Events.Error,
    async execute(error) {
        console.error(`[djs:mainErrorTracker] ${error.message}`);
    }
}