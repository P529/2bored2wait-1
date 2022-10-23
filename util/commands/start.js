const { SlashCommandBuilder } = require('discord.js');
const { options } = require('request');
const PubSub = require('pubsub-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Start the proxy!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        PubSub.publish('start', interaction)
    },
};