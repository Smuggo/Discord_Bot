const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
});

// Event listener for messages
client.on('message', msg => {
    // Basic bot commands
    if (msg.content[0] == "~"){
        var command = msg.content.substr(1);
        command = command.split(" ");
        command[0] = command[0].toLowerCase();
 
        // Replies to anybody who says "ping" with "pong"
        if (command[0] === "ping") {
            msg.reply('Pong!');
        }
        // Sends the user an URL for their avatar
        if (command[0] === "avatar"){
            msg.reply(msg.author.avatarURL);
        }

        // Sends a picture of Todd Howard in chat
        if (command[0] === "todd"){
            msg.channel.send({files:["./images/todd.jpg"]});
        }

        // Embed a message
        if (command[0] === "embed"){
            const embed = new Discord.RichEmbed()
            .setTitle("A slick little embed")
            .setColor(0xFF0000)
            .setDescription("Hello, this is a slick embed!");
            msg.channel.send(embed);
        }

        //Clean chat by number of messages
        if (command[0] === "clear"){
            var numMessages = command[1];
            try{
                msg.channel.bulkDelete(numMessages);
                msg.channel.send("Cleaned " + numMessages + " messages.");
            }
            catch(err){
                msg.channel.send("Invalid command.");
            }
        }
    }
});

client.login(config.token);