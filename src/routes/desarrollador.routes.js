const verifyToken = require('../middlewares/auth.handler');
const {
    getDesarrollador,
    // getDesarrolladorById,
    createDesarrollador,
    updateDesarrollador,
    deleteDesarrollador
} = require('../services/desarrollador.service');

function ApiUsuarioDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador', router);

    router.post('/', async (req, res) => {
        const user = await createDesarrollador(req.body);
        res.json({
            status: true,
            content: user
        });
    })    
}

module.exports = ApiUsuarioDesarrollador;
