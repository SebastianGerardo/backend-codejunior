const {
    crearRedEmp,
    actualizarRedEmp,
    eliminarRedEmp
} = require('../services/redes_emp.service');

function ApiRedesEmp(app){
    const router = require('express').Router();
    app.use('/redes_emp', router);

    router.post('/', async (req, res) => {
        console.log(req.body);
        try {
            const redes_emp = await crearRedEmp(req.body);
            res.status(200).json({
                status: true,
                message: "¡La red se ha agregado correctamente!"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "La red no se pudo agregar."
            })
        }
    })

    router.put('/:id', async (req, res) => {
        try {
            const redes_emp = await actualizarRedEmp(req.params.id, req.body);
            res.json({
                status: true,
                message: "La red se ha actualizado correctamente!"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                content: "La red no se pudo actualizar."
            })
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            const redes_emp = await eliminarRedEmp(req.params.id);
            res.json({
                status: true,
                message: "La red ha sido eliminada correctamente"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                content: "La red no se pudo eliminar"
            })
        }
    })
}

module.exports = ApiRedesEmp;