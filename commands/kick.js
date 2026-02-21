const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'kick',
  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers))
      return message.reply("Você não tem permissão.");

    const member = message.mentions.members.first();
    if (!member) return message.reply("Mencione um usuário.");

    const motivo = args.slice(1).join(" ") || "Sem motivo";

    await member.kick(motivo);
    message.channel.send(`${member.user.tag} foi expulso. Motivo: ${motivo}`);
  }
};
