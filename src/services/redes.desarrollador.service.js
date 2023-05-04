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