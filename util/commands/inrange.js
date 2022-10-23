const { SlashCommandBuilder } = require('discord.js');
const { options } = require('request');
const PubSub = require('pubsub-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inrange')
        .setDescription('List of players currently in visual range!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        PubSub.publish('visualRange', interaction)
    },
};