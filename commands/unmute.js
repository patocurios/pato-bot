module.exports = {
  name: 'unmute',
  async execute(message, args) {

    const member = message.mentions.members.first();
    if (!member) return message.reply("Mencione um usuário.");

    await member.timeout(null);
    message.channel.send(`${member.user.tag} foi desmutado.`);
  }
};
