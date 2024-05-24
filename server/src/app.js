const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error('Erro na conexão com o MongoDB:', error));
db.once('open', () => console.log('Conectado ao MongoDB com sucesso'));

app.use(express.json());

const notaRouter = require('./routes/notaRoutes');
app.use('/notas', notaRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
