module.exports = {
  name: 'anuncio',
  async execute(message, args) {

    if (!message.member.permissions.has("Administrator"))
      return message.reply("Sem permissão.");

    const texto = args.join(" ");
    if (!texto) return message.reply("Digite o anúncio.");

    message.channel.send(`📢 **ANÚNCIO** 📢\n\n${texto}`);
  }
};
