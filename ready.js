const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
   var oyun = [
        "!kayıtol <isim> <yaş>",
        "Kayıt Sistemi İstiyorsanız Eto#8041 ile İletişime Geçin"
    ];
   
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length));

        client.user.setGame(oyun[random], "https://www.twitch.tv/riger35");
  
        }, 2 * 5000);
}