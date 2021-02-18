module.exports = {
	name: "server",
	description: "Infomation about servers",
	execute(message){
		message.channel.send(`Server name: ${message.guild.name}, total member: ${message.guild.memberCount}`);
	}
}