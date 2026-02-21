module.exports = {
  name: 'aviso',
  async execute(message, args) {

    const member = message.mentions.members.first();
    if (!member) return message.reply("Mencione um usuário.");

    const motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply("Digite o motivo.");

    member.send(`⚠️ Você recebeu um aviso em ${message.guild.name}\nMotivo: ${motivo}`);
    message.channel.send(`${member.user.tag} foi avisado.`);
  }
};
