const { SlashCommandBuilder } = require('discord.js');
const { options } = require('request');
const PubSub = require('pubsub-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('seen')
        .setDescription('List players that we have seen this session!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        PubSub.publish('seen', interaction)
    },
};