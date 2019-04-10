const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if (message.content === 'Rbd') {
    	message.reply('Hazırım');
  	}
});

client.on('message', message => {
    if (message.content === 'Sa') {
    	message.reply('Aleyküm Selam');
  	}
});

client.on('message', message => {
    if (message.content === 'Selamun Aleyküm') {
    	message.reply('Aleyküm Selam');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
