const verifyToken = require('../middlewares/auth.handler');
const {
    getDesarrollador,
    // getDesarrolladorById,
    createDesarrollador,
    updateDesarrollador,
    deleteDesarrollador,
    loginDesarrollador
} = require('../services/desarrollador.service');

function ApiUsuarioDesarrollador(app){
    const router = require('express').Router();
    app.use('/desarrollador', router);

    // router.get('/', async (req, res) => {
    //     const users = await getDesarrollador();
    //     res.json({
    //         status: true,
    //         content: users
    //     });
    // })

    // router.get('/:id', async (req, res) => {
    //     const user = await getDesarrolladorById(req.params.id);
    //     res.json({
    //         status: true,
    //         content: user
    //     });
    // })

    // router.post('/', async (req, res) => {
    //     const user = await createDesarrollador(req.body);
    //     res.json({
    //         status: true,
    //         content: user
    //     });
    // })

    router.post('/login', async (req, res) => {
        try {
            const {token} = await loginDesarrollador(req.body);
            res.status(200).json({
                    status: 200,
                    token: token
                 });
        } catch (err) {
            res.status(401).json({ 
                status: 401,
                message: "Contraseña y/o correo invalido"
             });
        }
    })

    router.get('/', verifyToken,  async (req, res) => {
        console.log("soy el",req.body)
        try {
            const user = await getDesarrollador(2);
            res.status(200).json({
                status: 200,
                content: user
            });
        } catch (err) {
            res.status(401).json({ 
                status: 401,
                message: "Contraseña y/o correo invalido jijiji"
             });
        }
    })

    // router.put('/:id', async (req, res) => {
    //     const user = await updateDesarrollador(req.params.id, req.body);
    //     res.json({
    //         status: true,
    //         content: user
    //     });
    // })

    // router.delete('/:id', async (req, res) => {
    //     const user = await deleteDesarrollador(req.params.id);
    //     res.json({
    //         status: true,
    //         content: user
    //     });
    // })
}

module.exports = ApiUsuarioDesarrollador;