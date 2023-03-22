import { Client, Discord, Once, ArgsOf } from 'discordx';
import {ActivityType} from 'discord.js';

@Discord()
class readyEvent {
  @Once({ event: "ready" })
  async onReady(
    []: ArgsOf<"ready">,
    client: Client,) {
    await client.initApplicationCommands();
    client.user?.setActivity({name: `${client.guilds.cache.size} servidores`, type: ActivityType.Listening});
    console.log(`${client.user?.tag} Ready!`);
  }
}