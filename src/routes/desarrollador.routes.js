const verifyToken = require('../middlewares/auth.handler');
const {
    getDesarrollador,
    // getDesarrolladorById,
    createDesarrollador,
    updateDesarrollador,
    deleteDesarrollador,
    loginDesarrollador
} = require('../services/desarrollador.service');

const {getEmpresaById} = require('../services/empresa.service');

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

    router.get('/', verifyToken, async (req, res) => {
      const userId = req.userId;
      const tipoId = req.tipoId;
    
      console.log(userId)
      
      try {
        if (tipoId == "desarrollador") {
          const user = await getDesarrollador(userId);
          res.status(200).json({
            status: 200,
            content: user
          });
        } else if (tipoId == "empresa") {
          const user = await getEmpresaById(userId);
          res.status(200).json({
            status: 200,
            content: user
          });
        }
      } catch (err) {
        res.status(401).json({
          status: 401,
          message: "Contraseña y/o correo invalido jijiji"
        });
      }
    })
      
}

module.exports = ApiUsuarioDesarrollador;
