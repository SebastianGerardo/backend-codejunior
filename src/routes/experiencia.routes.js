const {
    createExperiencia,
    updateExperiencia,
    deleteExperiencia
} = require('../services/experiencia.service');

function ApiExperienciaDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador_experiencia', router);

    router.post('/', async (req, res) => {
        try {
            const experiencia = await createExperiencia(req.body);
            res.status(200).json({
                status: true,
                message: "Experiencia creada exitosamente"
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
        const experiencia = await updateExperiencia(req.params.id, req.body);
        res.json({
            status: true,
            message: "Experiencia actualizada exitosamente"
        });
    })

    router.delete('/:id', async (req, res) => {
        const experiencia = await deleteExperiencia(req.params.id);
        res.json({
            status: true,
            message: "Experiencia eliminada exitosamente"
        });
    })
}

module.exports = ApiExperienciaDesarrollador;