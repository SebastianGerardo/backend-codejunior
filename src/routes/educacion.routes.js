const {
    createEducacion,
    updateEducacion,
    deleteEducacion
} = require('../services/educacion.service');

function ApiEduacionDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador_educacion', router);

    router.post('/', async (req, res) => {
        try {
            const educacion = await createEducacion(req.body);
            res.status(200).json({
                status: true,
                message: "Educacion creada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error
            })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
            const educacion = await updateEducacion(req.params.id, req.body);
            res.json({
                status: true,
                message: "Educacion actualizada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: error
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const educacion = await deleteEducacion(req.params.id);
            res.json({
                status: true,
                message: "Educacion eliminada exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: error
            })
        }
    })
}

module.exports = ApiEduacionDesarrollador;