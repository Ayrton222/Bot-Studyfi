// Para sempre que criar um comando novo

const { REST, Routes} = require("discord.js")
//dotenv
require('dotenv').config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

//importação dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands") //dirname = nome do diretorio 
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = [] 

for (const file of commandFiles){
    const command =  require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

//instancia rest
const rest = new REST({version: "10"}).setToken(TOKEN);

// deploy

(async () => {
    try {
        console.log(`Resetando ${commands.length} comandos...`)

        //put

        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
        console.log("Comandos registrado com sucesso")
    } catch (error) {
        console.error(error)
    }
})()