const {
    createRedesDesarrollador,
    updateRedesDesarrollador,
    deleteRedesDesarrollador
} = require("../services/redes.desarrollador.service");

function ApiRedesDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador_redes', router);

    router.post('/', async (req, res) => {
        try {
            const redes = await createRedesDesarrollador(req.body);
            res.json({
                status: true,
                message: "Redes creada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "Error al crear redes"
            })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
            const redes = await updateRedesDesarrollador(req.params.id, req.body);
            res.json({
                status: true,
                message: "Redes actualizada exitosamente"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "Error al actualizar redes"
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const redes = await deleteRedesDesarrollador(req.params.id);
            res.json({
                status: true,
                message: "Redes eliminada exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: error
            })
        }
    })
}

module.exports = ApiRedesDesarrollador;