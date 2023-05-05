const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createRedesDesarrollador(data) {
    const redesDesarrolladorCreada = await prisma.tbl_desarrollador_redes.create({
        data: {
            desarrollador_redes_url: data.url,
            tbl_desarrollador: data.id_desarrollador,
            tbl_redes: data.id_redes
        }
    });
    return redesDesarrolladorCreada;
}

async function updateRedesDesarrollador(id,data) {
    const redesDesarrolladorActualizada = await prisma.tbl_desarrollador_redes.update({
        where: {
            id_desarrollador_redes: parseInt(id)
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
    const redesDesarrolladorEliminada = await prisma.tbl_desarrollador_redes.delete({
        where: {
            id_desarrollador_redes: parseInt(id)
        }
    });
    return redesDesarrolladorEliminada;
}

module.exports = {
    createRedesDesarrollador,
    updateRedesDesarrollador,
    deleteRedesDesarrollador
}