const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createExperiencia(data) {
  const experienciaCreada = await prisma.tbl_experiencia.create({
    data: {
        experiencia_empresa: data.empresa,
        experiencia_cargo: data.cargo,
        experiencia_finicio: data.fecha_inicio,
        experiencia_ffin: data.fecha_fin,
        experiencia_logo: data.logo,
        tbl_desarrollador: data.id_desarrollador,
    }
  });
  return experienciaCreada;
}

async function updateExperiencia(id, data) {
  const experienciaActualizada = await prisma.tbl_experiencia.update({
    where: { id_experiencia: parseInt(id) },
    data: {
      experiencia_empresa: data.empresa,
      experiencia_cargo: data.cargo,
      experiencia_finicio: data.fecha_inicio,
      experiencia_ffin: data.fecha_fin,
      experiencia_logo: data.logo,
    },
  });
  return experienciaActualizada;
}

async function deleteExperiencia(id) {
  const experienciaEliminada = await prisma.tbl_experiencia.delete({
    where: { id_experiencia: parseInt(id) },
  });
  return experienciaEliminada;
}

module.exports = {
    createExperiencia,
    updateExperiencia,
    deleteExperiencia
}