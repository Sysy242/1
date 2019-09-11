const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!"



client.on('guildMemberAdd', member => {
    const welcomechanel = member
    let b_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`hey ${member.user.username} il nous a rejoin`)
    member.send(":heartpulse: Oui oui tu rêve pas Tu Cliques Tu Niques et de retour pour faire du sale rejoint nous vite :heartpulse: ")
    member.send(" ")
    member.send("`Plein de choses à Gagné. `")
    member.send("https://discord.gg/MtcuUnA")

})
        
client.on("ready", () =>{
    console.log("je suis prêt")

});

client.login(process.env.TOKEN)
