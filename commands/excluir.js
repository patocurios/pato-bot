const { PermissionsBitField } = require('discord.js');

module.exports = {
  name: 'excluir',
  async execute(message, args) {

    if (!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      return message.reply("Sem permissão.");

    const quantidade = parseInt(args[0]);
    if (!quantidade || quantidade > 100)
      return message.reply("Escolha um número até 100.");

    await message.channel.bulkDelete(quantidade, true);
    message.channel.send(`🧹 ${quantidade} mensagens excluídas.`)
      .then(msg => setTimeout(() => msg.delete(), 3000));
  }
};
