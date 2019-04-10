const Discord = require('discord.js');
const client = new Discord.Client();
    
client.on('message', message => {
    if (message.content === 'sil')
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj sildim!')
};

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
