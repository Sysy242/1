const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!"



client.on('guildMemberAdd', member => {
    const welcomechanel = member
    let b_embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`hey ${member.user.username} il nous a rejoin`)
    member.send("Hey" + member)
    member.send("Join For join ??? ^_^")
    member.send("https://discord.gg/EBPMMzR")

})
        
client.on("ready", () =>{
    console.log("je suis prêt")

});

client.login(process.env.TOKEN)
