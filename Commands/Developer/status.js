const { CommandInteraction, Client, MessageEmbed } = require('discord.js');
const { connection } = require('mongoose');
require('../../Events/Client/ready');


module.exports = {
    name: 'status',
    description: 'Displays the status of the client and database connection.',
    /**
     * 
     * @param {CommmandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`**Client:**\`🟢 ONLINE \` - \`${client.ws.ping}ms\`\n**Uptime:** <t:${parseInt(client.readyTimestamp /1000)}:R>\n
        **Database:** \`${switchTo(connection.readyState)}\``)

        return interaction.reply({embeds: [embed]})
    }

}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0: status = "🔴 ĐẴ NGẮT KẾT NỐI"
        break;
        case 1: status = "🟢 ĐÃ KẾT NỐI"
        break;
        case 2: status = "🟠 ĐANG KẾT NỐI"
        break;
        case 3: status = "🟣 ĐANG NGẮT KẾT NỐI"
        break;
    }
    return status;
}