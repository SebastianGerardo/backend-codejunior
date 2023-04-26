const express = require('express');
const ApiUsuarioEmpresa = require('./routes/empresa.routes');
const ApiUsuarioDesarrollador = require('./routes/desarrollador.routes');
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
})

//AQUI LLAMAMOS A LAS RUTAS
ApiUsuarioEmpresa(app)
ApiUsuarioDesarrollador(app)


app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})

