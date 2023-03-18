/*
    @Milim - Discord Application
    
    NodeJS:       v18
    Discord.js:   v14
    By: /zDragonSK
*/
const { Client, GatewayIntentBits, Events } = require('discord.js');
const dotenv = require('dotenv').config();

/* Create the Client. */
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


/* Connect to the client with the TOken. */
client.login(process.env.TOKEN);