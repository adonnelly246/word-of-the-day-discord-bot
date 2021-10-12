const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
    setTimeout(function(){ // in leftToEight() milliseconds run this:

        sendMessage(); // send the message once
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds)
    }, leftToEight())
})

function leftToEight(){
    var d = new Date();
    return (-d + d.setHours(10,0,0,0));
}

function sendMessage(){
    var guild = client.guilds.get('guildid');
    if(guild && guild.channels.get('channelid')){
        guild.channels.get('channelid').send("Good Morning");
    }

}

client.on("message", msg => {
  if (msg.content === "!anotherword") {
    msg.reply("pong");
  }
})



client.login(process.env.TOKEN)



// const { Client, Intents } = require('discord.js');
// const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('interactionCreate', async interaction => {
//   if (!interaction.isCommand()) return;

//   if (interaction.commandName === '!wotd') {
//     await interaction.reply('Pong!');
//   }
// });

// client.login('token');