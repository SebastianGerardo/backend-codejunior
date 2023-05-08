const {getRedes} = require('../services/redes.service');

function ApiRedes(app) {
    const router = require('express').Router();
    app.use('/redes', router);

    router.get('/', async (req, res) => {
        try {
            const redes = await getRedes();
            res.json({
                status: true,
                content: redes
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "Hubo un error al traer las redes"
            })
        }
    })
}

module.exports = ApiRedes;