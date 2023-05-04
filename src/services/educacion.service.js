const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createEducacion(data) {
  const educacionCreada = await prisma.tbl_educacion.create({
    data: {
        educacion_institucion: data.institucion,
        educacion_carrera: data.carrera,
        educacion_certificado: data.certificado,
        educacion_foto: data.logo,
        tbl_desarrollador: data.id_desarrollador,
    }
  });
  return educacionCreada;
}

async function updateEducacion(id, data) {
  const educacionActualizada = await prisma.tbl_educacion.update({
    where: { id_educacion: parseInt(id) },
    data: {
        educacion_institucion: data.institucion,
        educacion_carrera: data.carrera,
        educacion_certificado: data.certificado,
        educacion_foto: data.logo,
    },
  });
  return educacionActualizada;
}

async function deleteEducacion(id) {
  const educacionEliminada = await prisma.tbl_educacion.delete({
    where: { id_educacion: parseInt(id) },
  });
  return educacionEliminada;
}

module.exports = {
    createEducacion,
    updateEducacion,
    deleteEducacion
}