const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getEmpresa() {
    const users = await prisma.tbl_empresa.findMany();
    return users;
}

async function getEmpresaById(id) {
    const user = await prisma.tbl_empresa.findUnique({
        where: {
            id_empresa: parseInt(id)
        }
    });
    return user;
}

async function createEmpresa(data) {
    const user = await prisma.tbl_empresa.create({
        data: {
            empresa_razon_social: data.empresa_razon_social,
            empresa_ruc: data.empresa_ruc,
            empresa_telefono: data.empresa_telefono,
            empresa_descripcion: data.empresa_descripcion,
            empresa_foto: data.empresa_foto,
            empresa_encargado: data.empresa_encargado,
            empresa_email: data.empresa_email,
            empresa_password: data.empresa_password
        }
    });
    return user;
}

async function updateEmpresa(id, data) {
    const user = await prisma.tbl_empresa.update({
        where: {
            id_empresa: parseInt(id)
        },
        data: {
            empresa_razon_social: data.empresa_razon_social,
            empresa_ruc: data.empresa_ruc,
            empresa_telefono: data.empresa_telefono,
            empresa_descripcion: data.empresa_descripcion,
            empresa_foto: data.empresa_foto,
            empresa_encargado: data.empresa_encargado,
            empresa_email: data.empresa_email,
            empresa_password: data.empresa_password
        }
    });
    return user;
}

async function deleteEmpresa(id) {
    const user = await prisma.tbl_empresa.delete({
        where: {
            id_empresa: parseInt(id)
        }
    });
    return user;
}

module.exports = {
    getEmpresa,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}