const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!helpbot') {
    	message.reply('`!avatar` = **iti arata avatarul tau**');
  	}
});

client.on('message', message => {
    if (message.content === '!avatar') {
    	message.reply(
    embed.set_image(url='{user}');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
