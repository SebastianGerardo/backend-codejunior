const {createSala} = require("../services/chat.service");

function ApiSala(app){
    const router = require('express').Router();
    app.use('/crear_sala', router);

    router.post('/', async (req, res) => {
        try {
            const chat = await createSala(req.body);
            res.status(200).json({
                status: true,
                message: chat
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error,
                message: "Error al crear la sala"
            })
        }
    })
}

module.exports = ApiSala;