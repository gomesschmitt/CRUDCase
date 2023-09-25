const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require ('./routes/userRoutes')

app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


// permitir CORS policy erro (nao recomendado por causa da segurança, em teoria estou a aceitar receber pedidos de qualquer lado)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use('/api', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
