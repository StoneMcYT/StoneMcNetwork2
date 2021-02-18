const Discord = require('discord.js');
module.exports = {
	name: 'roles',
	description: 'about roles',
	execute(message){
		const Roles = new Discord.MessageEmbed()
		.setColor('#00FFFF')
		.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
		.setTitle('Roles available to the community')
		.addFields(
			{ name: "Partner", value: "Allows posting and recoding of Youtube Videos on the server (Less then <3warns and minium 20 views on most popular video)" },
			{ name: "DJ", value: "Allows control of music client (Groovy) (No warns on the server no history of abusing Role/Rank on server)" },
			)
		message.channel.send(Roles)
	}
}