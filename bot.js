const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NTY0NzIwNzk5MDY0MjYwNjE4.XKsARA.r3ByBziDHmWJwkhqN9uw9VKSg7c);
