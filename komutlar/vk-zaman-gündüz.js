const Discord = require('discord.js');
 
exports.run = (client, message, args) => {

let channel = message.mentions.channels.first() || message.channel;

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'VK Yetkilisi: '+message.author.tag);
message.channel.send(`Gündüz oldu herkese günaydın!`);

 

    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'gündüz'
};