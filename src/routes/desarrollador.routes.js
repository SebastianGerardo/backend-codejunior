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

    router.post('/', async (req, res) => {
        // console.log("soy el",req.body)
        const user = await createDesarrollador(req.body);
        res.json({
            status: true,
            content: user
        });
    })

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

    router.get('/:id', verifyToken, async (req, res) => {
        const requestedUserId = req.params.id;
        const userId = req.userId;
      
        console.log("hola",requestedUserId);

        // Verificar que el usuario tenga acceso a la información solicitada
        if (requestedUserId != userId) {
          return res.status(403).json({
            status: false,
            content: 'No tienes acceso a esta información'
          });
        }
      
        try {
          const user = await getDesarrollador(requestedUserId);
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
      
}

module.exports = ApiUsuarioDesarrollador;