const Discord = require('discord.js');

const client = new Discord.Client();




client.on('ready', () => {
	console.log("Ready.")

	setInterval(() => {
		const statuses = [
			`HCReaper.Club`,
			`Watching over HCReaper`,
		]

		const status = statuses[Math.floor(Math.random() * statuses.length)]
		client.user.setActivity(status, { type: "PLAYING" })
	}, 3000)

})

client.on('guildMemberAdd', member => {

	const channel = member.guild.channels.cache.find(channel => channel.name === "arrivals");
	if (!channel) return;

	channel.send(`Welcome to HCReaper ${member}!
    :star: hcreaper.club
    :shopping_cart: store.hcreaper.club
    
    **Thanks For Joining!**`)


});

client.login(NzY3ODcyMTI5MDM4OTQyMjQ5.X44OpQ.2GJlHwFJD5MZcvNfj-qIUkxFcIY);
