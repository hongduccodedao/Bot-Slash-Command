const { Client } = require('discord.js');
const mongoose = require('mongoose');
const { Database } = require('../../config.json')
/**
 * @param {Client} client
 */

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.username} đã sẵn sàng hoạt động!`);
        client.user.setActivity('Bot Discord Slash Command', {type: 'STREAMING'})


        if (!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`${client.user.username} kết nối thành công vơi Database!`)
        }).catch(err => {
            console.log(err)
        });
    }
}