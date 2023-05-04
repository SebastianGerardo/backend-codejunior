const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createRedes(data) {
  const redesCreada = await prisma.tbl_redes.create({
    data: {
        redes_redes: data.redes,
    }
  });
  return redesCreada;
}

async function updateRedes(id, data) {
    const redesActualizada = await prisma.tbl_redes.update({
        where: { id_redes: parseInt(id) },
        data: {
            redes_redes: data.redes
        },
    });
    return redesActualizada;
}

async function deleteRedes(id) {
    const redesEliminada = await prisma.tbl_redes.delete({
        where: { id_redes: parseInt(id) },
    });
    return redesEliminada;
}

module.exports = {
    createRedes,
    updateRedes,
    deleteRedes
}
