const Discord = require('discord.js');

require('dotenv/config');

console.log('token ', process.env.TOKEN_BOT);

const client = new Discord.Client();

const prefix = '@';

client.on('message', (message) => {
  // ignore bots messages
  if (message.author.bot) return;
  // ignore messages that dont start with prefix
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Essa mensagem teve a latência de ${timeTaken}ms.`);
  }
});

client.login(process.env.TOKEN_BOT);
