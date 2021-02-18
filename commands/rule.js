const Discord = require('discord.js');
module.exports = {
  name: 'rule',
  description: 'The rule of cool StoneMc Network',
  execute(message){
const Rules = new Discord.MessageEmbed()
.setColor('#00FFFF')
.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
.setTitle (' Our server rules')
    .addFields( 
      { name: "Rule #1:", value: "Don't be toxic/racist/sexist (1 warn)\nBe Kind " },
      { name: "Rule #2", value: "Sensitive topics are banned (1 warn)\nSensitive topics are banned as we do not want arguments starting as we are trying to keep the server friendly and safe" },
      { name: "Rule #3", value: "NSFW (18+ content) is prohibited Only in chats(1 warn)\n18+ content is banned in our chats only " },
      { name: "Rule #4", value: "Bypassing spam/swear/advertising filter (1hr mute + 1 warn)\nWell if you manged to bypass it we update the filter and you get muted " },
      { name: "Rule #5", value: "No doxxing (sharing person information of others example name age address) (Case by Case basis)\nDepends if its accidental no warn on purpose ban on and on" },
      { name: "Rule #6", value: "No Advertising (Wont be warned but message will de deleted and you will be muted for an hour)" },
      { name: "Rule #8", value: "No DMing staff (Depends on how kind our staff feels max 2 warns)\nDon't DM our staff unless they ask you all questions go to @Magma Block If you DM StoneMc He probably will give you 3 warns" }, 
      { name: "Rule #9", value: "Use common sense (Case by case warns)\nPlease use common sense" }, 
      { name: "Rule #10", value: "5 warn = Temp-ban (Banned for 48hrs) - 10 Warns = Permanent Ban\nSever punishments" }
      )
   .setFooter( 'Rules last updated on 24/1/2021','https://cdn.discordapp.com/embed/avatars/0.png%27');
   message.channel.send(Rules);
}
}