const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const embed = new Discord.MessageEmbed()
        .setFooter(`PFP requested by ${message.author.tag}`)
        .setColor(`0x00f8ff`)
        .setTimestamp()
        .setTitle(`${member.user.tag} Profile Picture`)
        .setDescription(`[View Avatar Here](${member.user.displayAvatarURL({ dynamic: true, size: 4096 })}) \n\nMade by [Nickzz](https://github.com/NickzzDev/)`)
        .setImage(member.user.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed) 

}
