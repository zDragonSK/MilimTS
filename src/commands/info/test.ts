import { Discord, Slash } from 'discordx';
import { Category } from '@discordx/utilities';
import { CommandInteraction } from 'discord.js';

@Discord()
@Category('Experimental')
export default class HelloCommand {
    @Slash({
        name: 'test',
        description: 'Just a test command'
    })
    async hello(interaction: CommandInteraction) {
        await interaction.reply({
            content: `Hello, ${interaction.member}!`
        });
    }
}