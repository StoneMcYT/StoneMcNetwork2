const config = require('../config.json');
module.exports = {
	name: 'version',
	description: 'tell you the ver of bot',
	execute(message){
		message.channel.send(config.status + " " + config.version + "." + " Coded by: " + config.author)
	}
}