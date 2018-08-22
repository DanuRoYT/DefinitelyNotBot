const Discord = require('discord.js');
const client = new Discord.client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '??help') {
    message.reply('`??programator` = **iti arata programatorul botului**');
  	}
});

client.on("message", message => {
	async def programator():
    embed = discord.Embed(
        title = 'Utilizatorul : DanuRo YT',
        description = 'Calm (in unele situatii), trist, in depresie, timid, nu e bagat in seama.',
        colour = discord.Colour.blue()
	
})

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
