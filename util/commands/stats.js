const { SlashCommandBuilder } = require('discord.js');
const PubSub = require('pubsub-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Display proxy stats!'),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true })
        PubSub.publish('mcStats', interaction)
    }
};
