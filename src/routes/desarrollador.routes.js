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

    router.get('/', verifyToken,  async (req, res) => {
        const userId = req.userId;
        try {
            const user = await getDesarrollador(userId);
            res.status(200).json({
                status: 200,
                content: user
            });
        }
        catch (err) {
            res.status(401).json({
                status: 401,
                message: "Contraseña y/o correo invalido"
            });
        }
    })

    router.put('/:id', verifyToken, async (req, res) => {
        const userId = req.userId;
        const user = await updateDesarrollador(userId, req.body);
        res.json({
            status: true,
            content: user
        });
    })
}

module.exports = ApiUsuarioDesarrollador;
