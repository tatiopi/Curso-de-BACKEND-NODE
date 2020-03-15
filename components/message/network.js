const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getMessages().then(messageList => {
        response.success(req, res, messageList, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error')
    })
});

router.delete('/', (req, res) => {
    response.success(req, res, 'Eliminado correctamente');
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message).then(() => {
        response.success(req, res, 'Creado correctamente');
    }).catch(() => {
        response.error(req, res, 'Informacion incorrecta', 400, 'Error en el logueado');
    });
});

module.exports = router;