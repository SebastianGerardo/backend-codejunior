const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

// async function getDesarrollador() {
//   const users = await prisma.tbl_desarrollador.findMany();
//   return users;
// }

async function getDesarrollador(id) {
    console.log("iddd", id)
    const user = await prisma.tbl_desarrollador.findUnique({
        where: {
            id_desarrollador: parseInt(id)
        }
    });
    return user;
}

async function loginDesarrollador(data) {
    const user = await prisma.tbl_desarrollador.findFirst({
      where: {
        desarrollador_email: data.desarrollador_email,
      },
    });
  
    if (!user) {
      return null;
    }
  
    const validatePassword = await bcrypt.compare(
      data.desarrollador_password,
      user.desarrollador_password
    );
  
    if (!validatePassword) {
      return null;
    }
  
    const token = jwt.sign(
      { id: user.id_desarrollador, correo: user.desarrollador_email },
      process.env.JWT_SECRET, //chapa del env
      {
        expiresIn: "1d",
      }
    );
  
    //   console.log(token);

    return {token};
  }

async function createDesarrollador(data) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.desarrollador_password, salt);
  const user = await prisma.tbl_desarrollador.create({
    data: {
      desarrollador_nombre: data.desarrollador_nombre,
      desarrollador_apellido: data.desarrollador_apellido,
      desarrollador_cargo: data.desarrollador_cargo,
      desarrollador_email: data.desarrollador_email,
      desarrollador_password: hashedPassword,
      desarrollador_telefono: data.desarrollador_telefono,
      desarrollador_descripcion: data.desarrollador_descripcion,
      desarrollador_foto: data.desarrollador_foto,
    },
  });
  return user;
}

async function updateDesarrollador(id, data) {
  const user = await prisma.tbl_desarrollador.update({
    where: {
      id_desarrollador: parseInt(id),
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
    },
  });
  return user;
}

async function deleteDesarrollador(id) {
  const user = await prisma.tbl_desarrollador.delete({
    where: {
      id_desarrollador: parseInt(id),
    },
  });
  return user;
}

module.exports = {
  getDesarrollador,
  loginDesarrollador,
  createDesarrollador,
  updateDesarrollador,
  deleteDesarrollador,
};
