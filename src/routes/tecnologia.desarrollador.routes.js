const {
    createTecnologiaDesarrollador,
    updateTecnologiaDesarrollador,
    deleteTecnologiaDesarrollador
} = require('../services/tecnologia.desarrollador.service');

function ApiTecnologiaDesarrollador(app) {
    const router = require('express').Router();
    app.use('/desarrollador_tecnologia', router);

    router.post('/', async (req, res) => {
        try {
            const tecnologiaDesarrollador = await createTecnologiaDesarrollador(req.body);
            res.json({
                status: true,
                message: "TecnologiaDesarrollador creada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "Error al crear tecnologiaDesarrollador"
            })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
            const tecnologiaDesarrollador = await updateTecnologiaDesarrollador(req.params.id, req.body);
            res.json({
                status: true,
                message: "TecnologiaDesarrollador actualizada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "Error al actualizar tecnologiaDesarrollador"
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const tecnologiaDesarrollador = await deleteTecnologiaDesarrollador(req.params.id);
            res.json({
                status: true,
                message: "TecnologiaDesarrollador eliminada exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: error
            })
        }
    })
}

module.exports = ApiTecnologiaDesarrollador;