import { Client, Discord, Slash, SlashOption } from 'discordx';
import { Category } from '@discordx/utilities';
import { ApplicationCommandOptionType, CommandInteraction, User, EmbedBuilder } from 'discord.js';

@Discord()
@Category('info')
export class userinfo {
  @Slash({ name: 'userinfo', description: "userinfo" })
  userinfo(
    @SlashOption({
      description: "View a user's information.",
      name: "member",
      required: true,
      type: ApplicationCommandOptionType.User,
    })
    member: User,
    interaction: CommandInteraction,
    client: Client) {

    const user = interaction.guild?.members.cache.get(member.id);
    const avatar = user?.user.avatarURL({ size: 1024 });

    var embed = new EmbedBuilder()
      .setTitle(`${user?.user.username}'s informations`)
      .setThumbnail(`${avatar}`)
      .setFields(
        {
          name: '<:Info:953897898481954827> Tag',
          value: `\`${user?.user.tag}\``,
          inline: true
        },
        {
          name: '<:Information:957490076567363645> ID',
          value: `\`${user?.user.id}\``,
          inline: true
        },
        {
          name: '<:time:957490078131830854> Created on',
          value: `\`${user?.user.createdAt.toLocaleDateString("pt-br")}\``,
          inline: true
        },
        {
          name: '<:invite:953914955311239168> Joined at',
          value: `\`${user?.joinedAt?.toLocaleDateString("pt-br")}\``,
          inline: false
        }
      )
      .setTimestamp();
    interaction.reply({ embeds: [embed] });
  }
}