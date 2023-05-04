const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createRedesDesarrollador(data) {
    const redesDesarrolladorCreada = await prisma.tbl_redes_desarrollador.create({
        data: {
            desarrollador_redes_url: data.url,
            tbl_desarrollador: data.id_desarrollador,
            tbl_redes: data.id_redes
        }
    });
    return redesDesarrolladorCreada;
}

async function updateRedesDesarrollador(data) {
    const redesDesarrolladorActualizada = await prisma.tbl_redes_desarrollador.update({
        where: {
            id_redes_desarrollador: data.id
        },
        data: {
            desarrollador_redes_url: data.url,
            tbl_desarrollador: data.id_desarrollador,
            tbl_redes: data.id_redes
        }
    });
    return redesDesarrolladorActualizada;
}

async function deleteRedesDesarrollador(id) {
    const redesDesarrolladorEliminada = await prisma.tbl_redes_desarrollador.delete({
        where: {
            id_redes_desarrollador: id
        }
    });
    return redesDesarrolladorEliminada;
}

module.exports = {
    createRedesDesarrollador,
    updateRedesDesarrollador,
    deleteRedesDesarrollador
}