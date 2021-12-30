const { CommandInteraction, MessageEmbed } = require('discord.js')


module.exports = {
    name: "avatar",
    description: "Embeds the target member's avatar.",
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
        const Target = interaction.options.getUser('target');
        interaction.reply({embeds: 
            [new MessageEmbed()
            .setAuthor(`${Target.username}'s Avatar`, `${Target.displayAvatarURL({dynamic: true, size: 512})}`)
            .setImage(`${Target.displayAvatarURL({dynamic: true, size: 1024})}`)
            .setColor('GREEN')
            ]
        });
    }
}