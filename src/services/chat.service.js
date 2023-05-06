const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createSala (chat) {
    console.log(chat);
  const chatCreado = await prisma.tbl_sala.create({
    data: {
      id_empresa: chat.id_empresa,
      id_desarrollador: chat.id_desarrollador,
    }
  });
  return chatCreado;
}

module.exports = {
    createSala
}