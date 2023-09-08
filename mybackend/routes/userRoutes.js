const express = require('express');
const User = require('../models/User');  // Asegúrate de que la ruta sea correcta

const router = express.Router();

router.post('/add', async (req, res) => {
  const { email } = req.body;

  try {
    const user = new User({ email });
    await user.save();
    res.status(201).json({ message: 'Usuario creado con éxito', user });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el usuario', error });
  }
});

// Aquí puedes añadir más rutas como para actualizar o eliminar usuarios

module.exports = router;
