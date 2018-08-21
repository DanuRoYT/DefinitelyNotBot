const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '??help') {
    	message.channel.send('` ??programator `= **iti arata programatorul**');
  	}
});

client.on('message', message => {
    if (message.content === '??programator') {
    	message.reply('programatorul este DanuRo YT , are 10 ani, este youtuber, este gamei etc. youtube = DanuRo YT');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
