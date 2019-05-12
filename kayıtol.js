const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let nuser = message.author;
  var guildID = "568690197362114560";
  var channelID = "576130975604539402";
  let nickk = args.slice(0).join(" ");
  let nick = args[0];
  let yas = parseInt(args[1]);
  let role = message.guild.roles.find(r => r.name === "Member");
  message.delete(5000).catch(O_o=>{});
 if(!args[0] || args[0] === "help") return message.reply(`Kullanım: +kayıt-ol <isim> <yaş>`).then(msg => msg.delete(6000));
  message.delete(5000).catch(O_o=>{});
 if(nick >0 || nick <5) return message.reply(`Geçerli bir isim girin`).then(msg => msg.delete(6000));
  message.delete(5000).catch(O_o=>{});
  if(!yas || 65< args[1]) return message.reply(`Gerçek Yaşını Yazmalısın!`).then(msg => msg.delete(6000));

   message.delete(5000).catch(O_o=>{});
   message.guild.member(nuser).setNickname(nick +' •'+ yas);
   message.guild.member(nuser).addRole(role);
   
   var bEmbed = new Discord.RichEmbed()
   .setTitle("Kayıt log")
   .setTimestamp()
   .setColor("GREEN")
   .setFooter(`${message.author.tag}`,`${message.author.avatarURL}`)
   .setDescription(`${nick} •${yas}`)
   client.guilds.get(guildID).channels.get(channelID).send(bEmbed);
  
   var nEmbed = new Discord.RichEmbed()
   .setTitle("Kayıt Başarılı")
   .setTimestamp()
   .setColor("Green")
   .setDescription(`${role} Rolün Verildi ${nick} •${yas}`)
   message.channel.send(nEmbed);

}

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kayıtol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-ol',
  description: '',
  usage: 'kayıt-ol <isim> <yaş>'
};
//Riger