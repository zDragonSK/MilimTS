/*
  Milim.ts
  TypeScript model
*/
import 'dotenv/config';
import {GatewayIntentBits, Events} from 'discord.js';
import {Client} from 'discordx';
import {importx, dirname} from '@discordx/importer';

// Make an app client
const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
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