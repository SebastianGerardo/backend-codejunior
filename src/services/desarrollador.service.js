const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getDesarrollador(id) {
    const desarrollador = await prisma.tbl_desarrollador.findUnique({
        where: { id_desarrollador: parseInt(id) },
        select: {
          id_desarrollador: true,
          desarrollador_nombre: true,
          desarrollador_apellido: true,
          desarrollador_cargo: true,
          desarrollador_email: true,
          desarrollador_telefono: true,
          desarrollador_descripcion: true,
          desarrollador_foto: true,
        }
    });
    const experiencia = await prisma.tbl_experiencia.findMany({
      where: {tbl_desarrollador: parseInt(id)}
    })
    const educacion = await prisma.tbl_educacion.findMany({
      where: {tbl_desarrollador: parseInt(id)}
    })
    const tecnologias = await prisma.tbl_desarrollador_tecnologia.findMany({
      select: {
        idtbl_desarrollador_tecnologia: true,
        tbl_tecnologia_tbl_desarrollador_tecnologia_tbl_tecnologiaTotbl_tecnologia: {
          select: {
            tecnologia_nombre: true,
            tecnologia_imagen: true
          }
        }
      },
      where: {tbl_desarrollador: parseInt(id)}
    })
    const redes = await prisma.tbl_desarrollador_redes.findMany({
      select: {
        id_desarrollador_redes: true,
        desarrollador_redes_url: true,
        tbl_redes_tbl_desarrollador_redes_tbl_redesTotbl_redes: {
          select: {
            redes_redes: true
          }
        }
      },
      where: {
        tbl_desarrollador: parseInt(id)
      }
    })
    const user = {
      ...desarrollador,
      experiencia: experiencia,
      educacion: educacion,
      tecnologias:tecnologias,
      redes : redes
    }

    return user;
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
  createDesarrollador,
  updateDesarrollador,
  deleteDesarrollador,
};
