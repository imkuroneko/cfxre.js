// Load required resources =================================================================================================
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');

// Load configuration files ================================================================================================
const { botToken } = require(path.resolve('./config'));

// Define client Intents ===================================================================================================
const client = new Client({
    intents:  [ GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds ],
    partials: [ Partials.Channel, Partials.Message ]
});

// Track load time =========================================================================================================
client.startupTime = Date.now();

// Handle :: Events ========================================================================================================
try {
    var pathFiles = './events';
    fs.readdirSync(`${pathFiles}`).filter(file => file.endsWith('.js')).forEach((file) => {
        const event = require(path.resolve(path.join(`${pathFiles}`, file)));
        client.on(event.name, (...args) => event.execute(...args));    
    });
} catch(error) {
    console.error(`[load:events] ${error.message}`);
}

// Handle :: Commands (Admin) ==============================================================================================
try {
    client.commandsPrefix = new Collection();
    var pathFiles = './commands/admin';
    fs.readdirSync(`${pathFiles}`).filter(file => file.endsWith('.js')).forEach((file) => {
        client.commandsPrefix.set(file.split(".")[0], require(path.resolve(path.join(`${pathFiles}`, file))));
    });
} catch(error) {
    console.error(`[load:commands] ${error.message}`);
}

// Handle :: Commands (Slash) ==============================================================================================
try {
    client.slashRegister = [];
    client.interactionsSlash = new Collection();
    var pathFiles = './commands/slash';
    fs.readdirSync(`${pathFiles}`).filter(file => file.endsWith('.js')).forEach((file) => {
        var command = require(path.resolve(path.join(`${pathFiles}`, file)));
        client.slashRegister.push(command.data.toJSON());
        client.interactionsSlash.set(command.data.name, command);
    });
} catch(error) {
    console.error(`[load:slash_commands] ${error.message}`);
}

// Define token a init bot =================================================================================================
client.login(botToken).then(() => {
    console.log(`[init] bot inicializado en ${Date.now() - client.startupTime}ms`);
}).catch((error) => {
    console.error(`[client:token] ${error.message}`);
});

// Handle Error ============================================================================================================
process.on('unhandledRejection', (error) => {
    console.error(`[process:unhandledError] ${error.message}`);
});

client.on('shardError', (error) => {
    console.error(`[process:shardError] ${error.message}`);
});