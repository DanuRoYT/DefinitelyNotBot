const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'helpbot') {
    await client.say(
        """
            **@everyone REGULAMENTUL COMUNITATI Subscribers & Lupis SPERAM SAL RESPECTATI CU MARE DRAG /!\

Cand faceti cerere grad trebuie sa puneti acest cuvant keye daca nu nu puteti primi grad Cuvant keye::arrow_forward:? Nu,nulvoi citi niciodata


Nu injurati limbajul lincentios sau deranjant unui Lupisor sau unui Lupisor Alfa  se pedepseste cu [W]=Warn [B]=Ban [K]=Kick


Nu cereti grade doar facand cererea pentru grad cersirea gradelor se pedepseste cu [M]=Mute 1h 2m si 10s


Nu se face reclama la alte servere doar daca faceti cerere parteneriat obligatoriu daca vreti promova un server de discord sau al vostru**
        """)      
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
