import { Client, Discord, Slash, SlashOption } from 'discordx';
import { Category } from '@discordx/utilities';
import { ApplicationCommandOptionType, CommandInteraction, User, Embed, EmbedBuilder } from 'discord.js';
import 'dotenv/config';

@Discord()
@Category('info')
export class avatar {
  @Slash({
    name: 'avatar',
    description: "View a user's avatar."
  })
  async avatar(
    @SlashOption({
      description: "Member to display the avatar.",
      name: "member",
      required: true,
      type: ApplicationCommandOptionType.User
    })
    member: User,
    interaction: CommandInteraction,
    client: Client) {
    const user = interaction.guild?.members.cache.get(member.id);
    const avatar = user?.user.avatarURL({ size: 1024 });
    const embed = new EmbedBuilder()
      .setTitle(`${user?.user.tag}'s Avatar`)
      .setImage(`${avatar}`)
      .setTimestamp();
    await interaction.reply({content: `${member}`, embeds: [embed]});
  }
}