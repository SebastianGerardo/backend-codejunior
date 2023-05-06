const {
    getTrabajos,
    getTrabajosById,
    crearTrabajo,
    actualizarTrabajo,
    eliminarTrabajo
} = require('../services/trabajos.service');

function ApiTrabajos(app){
    const router = require('express').Router();
    app.use('/trabajos', router);

    router.post('/', async (req, res) => {
        console.log(req.body);
        try {
            const trabajos = await crearTrabajo(req.body);
            res.status(200).json({
                status: true,
                message: "¡El trabajo se ha creado correctamente!"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "El trabajo no se pudo crear."
            })
        }
    })

    router.get('/', async (req, res) => {
        try {
            const trabajos = await getTrabajos();
            res.json({
                status: true,
                content: trabajos
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "No se pudo obtener los trabajos."
            })
        }
    })

    router.get('/:id', async (req, res) => {
        try {
            const trabajos = await getTrabajosById(req.params.id);
            res.json({
                status: true,
                message: trabajos
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "No se pudo obtener el trabajo."
            })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
            const trabajos = await actualizarTrabajo(req.params.id, req.body);
            res.json({
                status: true,
                message: trabajos
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "El trabajo no se pudo actualizar."
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const trabajos = await eliminarTrabajo(req.params.id);
            res.json({
                status: true,
                message: "Trabajo eliminado correctamente"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "El trabajo no se pudo eliminar"
            })
        }
    })
}

module.exports = ApiTrabajos;