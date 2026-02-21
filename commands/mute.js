const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'mute',
  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ModerateMembers))
      return message.reply("Sem permissão.");

    const member = message.mentions.members.first();
    if (!member) return message.reply("Mencione um usuário.");

    await member.timeout(10 * 60 * 1000);
    message.channel.send(`${member.user.tag} foi mutado por 10 minutos.`);
  }
};
