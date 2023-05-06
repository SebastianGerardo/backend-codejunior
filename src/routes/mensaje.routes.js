const {enviarMensajeDes, enviarMensajeEmp, getMensajeDes, getMensajeEmp} = require('../services/mensaje.service');

function ApiMensaje(app){
    const router = require('express').Router();
    app.use('/mensaje', router); 

    router.post('/desarrollador', async (req, res) => {
        try {
            const mensaje = await enviarMensajeDes(req.body);
            res.status(200).json({
                status: true,
                message: mensaje
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error,
                message: "Error al enviar el mensaje"
            })
        }
    });

    router.post('/empresa', async (req, res) => {
        try {
            const mensaje = await enviarMensajeEmp(req.body);
            res.status(200).json({
                status: true,
                message: mensaje
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error,
                message: "Error al enviar el mensaje"
            })
        }
    });

    router.get('/desarrollador/:id', async (req, res) => {
        try {
            const mensajes = await getMensajeDes(req.params.id);
            res.status(200).json({
                status: true,
                message: mensajes
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error,
                message: "Error al obtener los mensajes"
            })
        }
    });

    router.get('/empresa/:id', async (req, res) => {
        try {
            const mensajes = await getMensajeEmp(req.params.id);
            res.status(200).json({
                status: true,
                message: mensajes
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error,
                message: "Error al obtener los mensajes"
            })
        }
    });
}


module.exports = ApiMensaje;