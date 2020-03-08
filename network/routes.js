const express = require('express');
const message = require('../components/message/')

const routes = function(server) {
    server.use('/message', message);
}