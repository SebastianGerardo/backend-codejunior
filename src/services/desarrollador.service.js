const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getDesarrollador() {
    const users = await prisma.tbl_desarrollador.findMany();
    return users;
}

async function getDesarrolladorById(id) {
    const user = await prisma.tbl_desarrollador.findUnique({
        where: {
            id_desarrollador: parseInt(id)
        }
    });
    return user;
}

async function createDesarrollador(data) {
    const user = await prisma.tbl_desarrollador.create({
        data: {
            desarrollador_nombre: data.desarrollador_nombre,
            desarrollador_apellido: data.desarrollador_apellido,
            desarrollador_cargo: data.desarrollador_cargo,
            desarrollador_email: data.desarrollador_email,
            desarrollador_password: data.desarrollador_password,
            desarrollador_telefono: data.desarrollador_telefono,
            desarrollador_descripcion: data.desarrollador_descripcion,
            desarrollador_foto: data.desarrollador_foto,
        }
    })
    return user;
}

async function updateDesarrollador(id, data) {
    const user = await prisma.tbl_desarrollador.update({
        where: {
            id_desarrollador: parseInt(id)
        },
        data: {
            desarrollador_nombre: data.desarrollador_nombre,
            desarrollador_apellido: data.desarrollador_apellido,
            desarrollador_cargo: data.desarrollador_cargo,
            desarrollador_email: data.desarrollador_email,
            desarrollador_password: data.desarrollador_password,
            desarrollador_telefono: data.desarrollador_telefono,
            desarrollador_descripcion: data.desarrollador_descripcion,
            desarrollador_foto: data.desarrollador_foto,
        }
    });
    return user;
}

async function deleteDesarrollador(id) {
    const user = await prisma.tbl_desarrollador.delete({
        where: {
            id_desarrollador: parseInt(id)
        }
    });
    return user;
}

module.exports = {
    getDesarrollador,
    getDesarrolladorById,
    createDesarrollador,
    updateDesarrollador,
    deleteDesarrollador
}
