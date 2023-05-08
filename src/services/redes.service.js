const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getRedes() {
    const redes = await prisma.tbl_redes.findMany();
    return redes;
}

module.exports = {
    getRedes
}