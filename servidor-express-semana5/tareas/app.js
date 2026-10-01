const express = require('express');
const app = express();
const usuariosRouter = require('./routes/usuarios');

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/error-demo', (req, res, next) => {
    next(new Error('¡Esto es una demostración de error!'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: '¡Ocurrió un error en el servidor!' });
});

app.use('/usuarios', usuariosRouter);

app.listen(3002, () => {
    console.log(`Servidor escuchando en el puerto 3002 http://localhost:3002`);
});
