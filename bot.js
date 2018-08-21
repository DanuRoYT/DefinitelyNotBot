const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '??help') {
    	message.channel.send('
                              ??programator = **iti arata programatorul**

                              ??palma @membru = **îi tragi o palmă unui membru**
                             
                              ??avatar = **avatarul tau**'}
});

client.on('message', message => {
    if (message.content === '??programator') {
    	message.reply('programatorul este DanuRo YT , are 10 ani, este youtuber, este gamer etc. youtube = DanuRo YT');
  	}
});

client.on('message', message => {
     
    if (message.content === '??palma {user}') {
        message.reply('iai dat o palmă lui {user}');
    }
 });

 client.on ('message', message => {
    if ('message.content === '??avatar') {
         message.reply ('{user.avatar_url}');
    }
 });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
