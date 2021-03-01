const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.once('ready', () => {
    console.log('Ready!');
	function randomStatus() {
        let status = ['NET BEE', `${client.users.cache.size}members`, '!Jᴀʜᴇʟ Aᴀᴍɪɴ#6061']
       let rstatus = Math.floor(Math.random() * status.length);
       
       client.user.setActivity(status[rstatus], {type: "WATCHING"});
    }; setInterval(randomStatus, 3000)
	function chNickname() {
		const targetguild = client.guilds.cache.get("726033850240598038")
		const me = targetguild.members.cache.get(client.user.id)
		let name = ["N", "NE", "NET", "NET B", "NET BE", "NET BEE"]
		for (let i = 0; i < name.length; i++)
			me.setNickname(name[i])
	}; setInterval(chNickname, 12000)
});

client.on('message', async message => {
	// Join the same voice channel of the author of the message
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}
});

client.login(config.token);

