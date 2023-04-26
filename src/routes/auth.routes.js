const express = require('express');
const jwt = require('jsonwebtoken');
const {config} = require('../config');

const UsuarioService = require('../services/usuario.service'); //AQUI LLAMAMOS AL SERVICIO
