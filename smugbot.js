const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
});

// Event listener for messages
client.on('message', msg => {
    // Replies to anybody who says "ping" with "pong"
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    // Sends the user an URL for their avatar
    if (msg.content === "what is my avatar"){
        msg.reply(msg.author.avatarURL);
    }

    // Sends a picture of Todd Howard in chat
    if (msg.content === "~todd"){
        msg.channel.send({files:["./images/todd.jpg"]});
    }

    // Embed a message
    if (msg.content === "how to embed"){
        const embed = new Discord.RichEmbed()
          .setTitle("A slick little embed")
          .setColor(0xFF0000)
          .setDescription("Hello, this is a slick embed!");
        msg.channel.send(embed);
    }

    //Clean chat
    if (msg.content.includes("~clear")){
        var numMessages = msg.content.split(" ")[1];
        try{
            msg.channel.bulkDelete(numMessages);
            msg.channel.send("Cleaned " + numMessages + " messages.");
        }
        catch(err){
            msg.channel.send("Invalid command.");
        }
    }
});

client.login(config.token);