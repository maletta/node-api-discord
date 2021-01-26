const Discord = require('discord.js');
// const express = require('express');

require('dotenv/config');

const client = new Discord.Client();
const prefix = '@';

// const app = express();

// app.get('/', (req, res) => res.send('Hello world'));

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
// app.listen(process.env.PORT || 3000);

const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({ token: process.env.TOKEN_BOT }));
app.listen(process.env.PORT || 80, () => {
  console.log('Server running on port 80');
});
