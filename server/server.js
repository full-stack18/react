const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Permitir CORS (para que React pueda conectarse)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Ruta de prueba
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde Express!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});