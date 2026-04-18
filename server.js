const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API publicada com pipeline no EC2 com sucesso!'
  });
});

app.get('/status', (req, res) => {
  res.json({
    aplicacao: 'api-aula02',
    status: 'online'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});