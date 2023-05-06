const {
    getTecnologia
} = require('../services/tecnologias.service');

function ApiTecnologias(app){
    const router = require('express').Router();
    app.use('/tecnologias', router);

    router.get('/', async (req, res) => {
        try {
            const tecnologias = await getTecnologia();
            res.json({
                status: true,
                content: tecnologias
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "No se pudo obtener las tecnologias."
            })
        }
    })
}

module.exports = ApiTecnologias;