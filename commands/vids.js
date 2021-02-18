const Discord = require('discord.js');
module.exports = {
	name: "vids",
	description: "videos of Stone",
	execute(message){
		const Vids = new Discord.MessageEmbed()
		.setColor('#00FFFF')
		.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
		.setTitle('Tutorials')
		.addFields(
			{ name: "Joining the server.", value: "https://www.youtube.com/watch?v=lQd5YXAyXwQ&ab_channel=StoneMc" },
			{ name: "ImageOnMaps Plugins How to", value: "https://youtu.be/rSxIDkyxBnY" },
			)
		message.channel.send(Vids)
		}
	}