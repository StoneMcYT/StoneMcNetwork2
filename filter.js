const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const moment = require('moment')

client.login(config.TOKEN).catch(console.error);
client.on('ready', () => {
  console.log('Now Online, ready to filter!');
});

client.on('message', message => {
  if(config.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
	moment.locale('en');
    const date = moment().format('lll');
    const Warn = new Discord.MessageEmbed()
    .setColor('00FFFF')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
    .setDescription(`${message.author.username}, please check your word.`)
    .setFooter('Action created at: '+date)
    message.channel.send(Warn)
	const channel = client.channels.cache.get('775525560625397801');
	const WarnFM = new Discord.MessageEmbed()
	.setColor('00FFFF')
	.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
	.addFields(
		{ name: "Name:", value: `${message.author}` },
		{ name: "Reason:", value: 'Use blocked word.' },
		{ name: "Word used:", value: `${message.content}` }
		)
	channel.send(WarnFM)
  }})
