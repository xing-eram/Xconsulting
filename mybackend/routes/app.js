const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/notificationDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use('/notifications', notificationRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
