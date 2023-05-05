const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function crearRedEmp(data) {
    const trabajo = await prisma.tbl_empresa_red.create({
        data: {
            empresa_red_url: data.empresa_red_url,
            id_redes: data.id_redes,
            id_empresa: data.id_empresa,
        }
    })
    return trabajo;
}

async function actualizarRedEmp(id, data) {
    const trabajo = await prisma.tbl_empresa_red.update({
        where: { idtbl_empresa_red: parseInt(id) },
        data: {
            empresa_red_url: data.empresa_red_url,
            id_redes: data.id_redes,
            id_empresa: data.id_empresa,
        }
    })
    return trabajo;
}

async function eliminarRedEmp(id) {
    const trabajo = await prisma.tbl_empresa_red.delete({
        where: { idtbl_empresa_red: parseInt(id) },
    })
    return trabajo;
}

module.exports = {
    crearRedEmp,
    actualizarRedEmp,
    eliminarRedEmp
}