const { SlashCommandBuilder } = require('discord.js');
const { options } = require('request');
const PubSub = require('pubsub-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exit')
        .setDescription('Exit the application!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        PubSub.publish('exit', interaction)
    },
};