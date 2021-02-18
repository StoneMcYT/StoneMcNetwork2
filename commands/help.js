const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
	name: 'help',
	description: 'A cool help',
	execute(message){
		const date = moment().format('lll');
		const Help = new Discord.MessageEmbed()
		.setColor('#00FFFF')
		.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
		.setTitle('A cool help for StoneMc Bot!')
		.addFields(
			{ name: "Prefix", value: "/" },
			{ name: "Commands", value: "/help\n/rule\n/server\n/roles\n/time\n/version\n/vids\n/avatar\n/Status" },
			)
		.setFooter('Content requested at: ' + date)
		message.channel.send(Help)
	}
}