const {
    createExperiencia,
    updateExperiencia,
    deleteExperiencia
} = require('../services/experiencia.service');

function ApiExperienciaDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador_experiencia', router);

    router.post('/', async (req, res) => {
        const experiencia = await createExperiencia(req.body);
        res.json({
            status: true,
            content: experiencia
        });
    })

    router.put('/:id', async (req, res) => {
        const experiencia = await updateExperiencia(req.params.id, req.body);
        res.json({
            status: true,
            content: experiencia
        });
    })

    router.delete('/:id', async (req, res) => {
        const experiencia = await deleteExperiencia(req.params.id);
        res.json({
            status: true,
            content: experiencia
        });
    })
}

module.exports = ApiExperienciaDesarrollador;