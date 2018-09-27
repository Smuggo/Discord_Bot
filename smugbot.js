const Discord = require('discord.js');
const client = new Discord.Client();
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

const {token} = require("./confg.json");

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
        const attachment = new Discord.Attachment("https://ih0.redbubble.net/image.431272546.1489/flat,550x550,075,f.u1.jpg")
        msg.channel.send(attachment);
    }

    // Embed a message
    if (msg.content === "how to embed"){
        const embed = new Discord.RichEmbed()
          .setTitle("A slick little embed")
          .setColor(0xFF0000)
          .setDescription("Hello, this is a slick embed!");
        msg.channel.send(embed);
    }
});

client.login(token);