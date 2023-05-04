const verifyToken = require('../middlewares/auth.handler');
const { loginUser } = require('../services/auth.service');
const { getDesarrollador } = require('../services/desarrollador.service');
const { getEmpresaById } = require('../services/empresa.service');

function Auth(app){
    const router = require('express').Router();
    app.use('/auth', router);

    router.post('/login', async (req, res) => {
        try {
            const {token} = await loginUser(req.body);
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


    router.get('/verify', verifyToken, async (req, res) => {
        const userId = req.userId;
        const tipoId = req.tipoId;
        
        console.log("estoy en verify",userId, tipoId)
        
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
          console.log(err)
          res.status(401).json({
            status: 401,
            message: "Contraseña y/o correo invalido jijiji"
          });
        }
      })
}

module.exports = Auth;