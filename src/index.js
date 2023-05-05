const express = require('express');
const ApiUsuarioEmpresa = require('./routes/empresa.routes');
const ApiUsuarioDesarrollador = require('./routes/desarrollador.routes');
const cors = require('cors');
const Auth = require('./routes/auth.routes');
const ApiExperienciaDesarrollador = require('./routes/experiencia.routes');
const ApiEduacionDesarrollador = require('./routes/educacion.routes');
const ApiRedesDesarrollador = require('./routes/redes.desarrollador.routes');
const ApiTecnologiaDesarrollador = require('./routes/tecnologia.desarrollador.routes');

const app = express();

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 
        status: 200,
        message: 'Servidor Activo' 
    });
})

//AQUI LLAMAMOS A LAS RUTAS
ApiUsuarioEmpresa(app)
ApiUsuarioDesarrollador(app)
Auth(app)
ApiExperienciaDesarrollador(app)
ApiEduacionDesarrollador(app)
ApiRedesDesarrollador(app)
ApiTecnologiaDesarrollador(app)


app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})