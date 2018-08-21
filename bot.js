const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'helpbot') {
    	message.channel.send('**programator = arata programatorul botului || avatar = arata avatarul programatorului**');
  	}
});

client.on('message', message => {
    if (message.content === 'programator') {
    	message.reply('**Programatorul serverului este DanuRo YT#6977,pe youtube se numeste DanuRo YT');
  	}
});

client.on('message', message => {
    if (message.content === 'avatar') {
    	message.reply(
    embed.set_image(url='https://cdn.discordapp.com/attachments/453830411009654785/481585979094728709/1534762105947.jpeg');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
