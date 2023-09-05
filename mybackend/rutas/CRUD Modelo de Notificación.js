const express = require('express');
const router = express.Router();
const Notification = require('./models/Notification');  // Asegúrate de que la ruta sea correcta

// Crear una nueva dirección de correo electrónico para notificaciones
router.post('/notifications', async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new Notification({ email });
    await newEmail.save();
    res.status(201).json(newEmail);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo guardar el correo electrónico' });
  }
});

// Obtener todas las direcciones de correo electrónico para notificaciones
router.get('/notifications', async (req, res) => {
  try {
    const emails = await Notification.find();
    res.status(200).json(emails);
  } catch (error) {
    res.status(400).json({ error: 'No se pudieron recuperar los correos electrónicos' });
  }
});

// Eliminar una dirección de correo electrónico
router.delete('/notifications/:id', async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Correo electrónico eliminado con éxito' });
  } catch (error) {
    res.status(400).json({ error: 'No se pudo eliminar el correo electrónico' });
  }
});

module.exports = router;
