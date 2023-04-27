const {
    getDesarrollador,
    getDesarrolladorById,
    createDesarrollador,
    updateDesarrollador,
    deleteDesarrollador
} = require('../services/desarrollador.service');
const { getExperiencia } = require('../services/experiencia.service');

function ApiUsuarioDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador', router);

    router.get('/', async (req, res) => {
        const users = await getDesarrollador();
        res.json({
            status: true,
            content: users
        });
    })

    router.get('/:id', async (req, res) => {
        const user = await getDesarrolladorById(req.params.id);
        const experiencia = await getExperiencia(req.params.id);
        res.json({
            status: true,
            content: {
                ...user,
                experiencia: experiencia
            }
        });
    })

    router.post('/', async (req, res) => {
        const user = await createDesarrollador(req.body);
        res.json({
            status: true,
            content: user
        });
    })

    router.put('/:id', async (req, res) => {
        const user = await updateDesarrollador(req.params.id, req.body);
        res.json({
            status: true,
            content: user
        });
    })

    router.delete('/:id', async (req, res) => {
        const user = await deleteDesarrollador(req.params.id);
        res.json({
            status: true,
            content: user
        });
    })
}

module.exports = ApiUsuarioDesarrollador;