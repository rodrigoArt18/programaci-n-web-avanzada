const express = require('express');
const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
    res.send('Lista de usuarios');
});

router.get('/:id', (req, res) => {
    const  id  = req.params.id;
    res.send(`Usuario con ID: ${id}`);
});

module.exports = router;