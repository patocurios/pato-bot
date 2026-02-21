const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'ban',
  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers))
      return message.reply("Você não tem permissão.");

    const member = message.mentions.members.first();
    if (!member) return message.reply("Mencione um usuário.");

    const motivo = args.slice(1).join(" ") || "Sem motivo";

    await member.ban({ reason: motivo });
    message.channel.send(`${member.user.tag} foi banido. Motivo: ${motivo}`);
  }
};
