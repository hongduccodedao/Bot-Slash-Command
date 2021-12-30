const { CommandInteraction, MessageEmbed } = require('discord.js')
const moment = require('moment');
const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = {
    name: "userinfo",
    aliases: ["user", "ui"],
    description: "Embeds the target member's infomation.",
    options:[
        {
            name: "target",
            description: "Select a target.",
            type: "USER",
            required: true,
        },
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const Target = interaction.options.getMember('target');
        const userFlags = Target.user.flags.toArray();

        const embed = new MessageEmbed()
        .setAuthor(`${Target.user.username}`,Target.displayAvatarURL({dynamic: true}))
        .setThumbnail(Target.displayAvatarURL({dynamic: true}))
        .setColor(Target.displayHexColor)
        .addField(`**Tên người dùng**`,`\`${Target.user.tag}\``, true)
        .addField(`**ID người dùng**`,`\`${Target.id}\``,true)
        .addField(`**Flag**`,`\`${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Trống'}\``,true)
        .addField(`**Roles**`,`${Target.roles.cache.map(r => r).join(' ').replace("@everyone", " ")}`)
        .addField(`**Tham gia server**`, `\`${moment(Target.joinedAt).format('DD/MM/YYYY')} - ${moment(Target.joinedAt).startOf('day').fromNow()}\``, true)
        .addField(`**Tham gia Discord**`, `\`${moment(Target.user.createdAt).format('DD/MM/YYYY')} - ${moment(Target.user.createdAt).startOf('day').fromNow()}\``, true)
        .setTimestamp()

        interaction.reply({embeds: [embed]});
    }
}