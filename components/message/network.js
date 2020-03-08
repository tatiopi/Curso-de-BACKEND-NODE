const express = require('express');
const router = express.Router();
const response = require('../../network/response');

router.get('/message', (req, res) => {
    res.header({
        'custom-header': 'Nuestro valor personalizado',
    });
    response.success(req, res, 'Lista de mensajes');
});

router.delete('/message', (req, res) => {
    response.success(req, res, 'Eliminado correctamente');
});

router.post('/message', (req, res) => {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Creado correctamente');
    }
});

module.exports = router;