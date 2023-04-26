
const {
    getEmpresa,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
} = require('../services/empresa.service');

function ApiUsuarioEmpresa(app){
    const router = require('express').Router();
    app.use('/empresa', router);

    router.get('/', async (req, res) => {
        const users = await getEmpresa();
        res.json({
            status: true,
            content: users
        });
    })
    
    router.get('/:id', async (req, res) => {
        const user = await getEmpresaById(req.params.id);
        res.json({
            status: true,
            content: user
        });
    })
    
    router.post('/', async (req, res) => {
        const user = await createEmpresa(req.body);
        res.json({
            status: true,
            content: user
        });
    })

    router.put('/:id', async (req, res) => {
        const user = await updateEmpresa(req.params.id, req.body);
        res.json({
            status: true,
            content: user
        });
    })

    router.delete('/:id', async (req, res) => {
        const user = await deleteEmpresa(req.params.id);
        res.json({
            status: true,
            content: user
        });
    })
}



module.exports = ApiUsuarioEmpresa;