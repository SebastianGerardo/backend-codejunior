const express = require('express');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/env.config');

const DesarrolladorService = require('../services/desarrollador.service');

function ApiAuth(app){
    const router = express.Router();
    app.use('/auth', router);

    objDesarrollador = new DesarrolladorService();
}
