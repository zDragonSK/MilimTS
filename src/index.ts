/*
  Milim.ts
  TypeScript model : DiscordX

  By: @zDragonSK
*/
import 'dotenv/config';
import {GatewayIntentBits, Events} from 'discord.js';
import {Client} from 'discordx';
import {importx, dirname} from '@discordx/importer';

// Make an app client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration
  ],
  silent: false
});

// A main block function
async function main () {
  const AppToken = process.env.TOKEN || "";
  await importx(`${dirname(import.meta.url)}/{events,commands}/**/*.{ts,js}`);
  await client.login(AppToken);
}

main();