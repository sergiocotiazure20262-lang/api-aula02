const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'API publicada com sucesso no EC2!' });
});

app.get('/status', (req, res) => {
  res.json({ status: 'online' });
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta teste ${PORT}`);
});