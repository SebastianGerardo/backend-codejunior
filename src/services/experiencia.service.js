const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();


async function getExperiencia(id) {
    const experiencia = await prisma.tbl_experiencia.findMany({
        where: {tbl_desarrollador: parseInt(id)},
    });
    return experiencia;
}

async function getExperienciaById(id) {
    const experiencia = await prisma.tbl_experiencia.findUnique({
        where: {
            id_experiencia: parseInt(id)
        }
    });
    return experiencia;
}

async function createExperiencia(id,data) {
    const experiencia = await prisma.tbl_experiencia.create({
        data: {
            experiencia_empresa: data.experiencia_empresa,
            experiencia_cargo: data.experiencia_cargo,
            experiencia_finicio: data.experiencia_finicio,
            experiencia_ffin: data.experiencia_ffin,
            experiencia_logo: data.experiencia_logo,
            id_desarrollador:id
        }
    })
    return experiencia;
}

async function updateExperiencia(id, data) {
    const experiencia = await prisma.tbl_experiencia.update({
        where: {
            id_experiencia: parseInt(id)
        },
        data: {
            experiencia_empresa: data.experiencia_empresa,
            experiencia_cargo: data.experiencia_cargo,
            experiencia_finicio: data.experiencia_finicio,
            experiencia_ffin: data.experiencia_ffin,
            experiencia_logo: data.experiencia_logo
        }
    });
    return experiencia;
}

async function deleteExperiencia(id) {
    const experiencia = await prisma.tbl_experiencia.delete({
        where: {
            id_experiencia: parseInt(id)
        }
    });
    return experiencia;
}

module.exports = {
    getExperiencia,
    getExperienciaById,
    createExperiencia,
    updateExperiencia,
    deleteExperiencia
};