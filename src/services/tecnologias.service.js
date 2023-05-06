const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getTecnologia () {
    const tecnologia = await prisma.tbl_tecnologia.findMany({
        select: {
            id_tecnologia: true,
            tecnologia_nombre: true,
            tecnologia_imagen: true
        }
    });
    return tecnologia;
}

module.exports = {
    getTecnologia
}