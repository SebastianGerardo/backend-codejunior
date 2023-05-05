const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createTecnologiaDesarrollador(data) {
    const tecnologiaDesarrolladorCreada = await prisma.tbl_desarrollador_tecnologia.create({
        data: {
            tbl_desarrollador: data.id_desarrollador,
            tbl_tecnologia : data.id_tecnologia
        }
    });
    return tecnologiaDesarrolladorCreada;
}

async function updateTecnologiaDesarrollador(id, data) {
    const tecnologiaDesarrolladorActualizada = await prisma.tbl_desarrollador_tecnologia.update({
        where: {
            idtbl_desarrollador_tecnologia: parseInt(id)
        },
        data: {
            tbl_desarrollador: data.id_desarrollador,
            tbl_tecnologia: data.id_tecnologia
        }
    });
    return tecnologiaDesarrolladorActualizada;
}

async function deleteTecnologiaDesarrollador(id) {
    const tecnologiaDesarrolladorEliminada = await prisma.tbl_desarrollador_tecnologia.delete({
        where: {
            idtbl_desarrollador_tecnologia: parseInt(id)
        }
    });
    return tecnologiaDesarrolladorEliminada;
}

module.exports = {
    createTecnologiaDesarrollador,
    updateTecnologiaDesarrollador,
    deleteTecnologiaDesarrollador
}