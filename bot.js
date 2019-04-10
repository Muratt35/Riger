const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj sildim!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
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
