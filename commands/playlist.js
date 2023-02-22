const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a playlist mais aleatoria"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/0ovNgxttRJYvTxIaFyZToC?si=e0c6b7870e474596")
    }
}