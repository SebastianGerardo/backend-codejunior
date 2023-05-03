const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

async function getDesarrollador(id) {
    const user = await prisma.tbl_desarrollador.findUnique({
        where: {
            id_desarrollador: parseInt(id)
        }
    });
    return user;
}

async function loginDesarrollador(data) {
  if (data?.tipo == "desarrollador") {
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
      user.desarrollador_password,
    );
  
    if (!validatePassword) {
      return null;
    }

    const token = jwt.sign(
      { id: user.id_desarrollador, correo: user.desarrollador_email, tipo:data.tipo },
      process.env.JWT_SECRET, //chapa del env
      {
        expiresIn: "1d",
      }
    );
  
    return {token};
  } else if (data?.tipo == "empresa") {

    const user = await prisma.tbl_empresa.findFirst({
      where: {
        empresa_email: data.desarrollador_email,
      },
    });

    console.log("soy el user",user);

    if (!user) {
      return null;
    }
  
    const validatePassword = await bcrypt.compare(
      data.desarrollador_password,
      user.empresa_password,
    );

  
    if (!validatePassword) {
      return null;
    }
    console.log("soy el validate");

    const token = jwt.sign(
      { id: user.id_empresa, correo: user.empresa_email, tipo: data.tipo },
      process.env.JWT_SECRET, //chapa del env
      {
        expiresIn: "1d",
      }
    );
  
      console.log("soy el token",token);

    return {token};
  }
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.desarrollador_password, salt);
  const user = await prisma.tbl_desarrollador.update({
    where: {
      id_desarrollador: parseInt(id),
    },
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
