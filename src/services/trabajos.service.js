const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getTrabajos() {
    const trabajos = await prisma.tbl_trabajos.findMany({
        select: {
            id_trabajos: true,
            trabajos_cargo: true,
            trabajos_modalidad: true,
            trabajos_jornada: true,
            trabajos_salario: true,
            trabajos_publicado: true,
            tbl_empresa: {
            select: {
                id_empresa: true,
                empresa_email: true,
                empresa_encargado: true,
                empresa_foto: true,
                empresa_descripcion: true,
                empresa_telefono: true,
                empresa_ruc: true,
                empresa_razon_social: true,
                empresa_sector: true,
                empresa_ubicacion: true,
                empresa_nombre: true,
                }
            },
            tbl_trabajos_tecnologia: {
            select: {
                id_tecnologia: true,
                tbl_tecnologia: {
                select: {
                    tecnologia_nombre: true,
                    tecnologia_imagen: true
                }
                }
            }
            }

        },
    });
    return trabajos;
}

async function getTrabajosById(id) {
    const trabajo = await prisma.tbl_trabajos.findUnique({
        where: { id_trabajos: parseInt(id) },
    })
    return trabajo;
}

async function crearTrabajo(data) {
    const trabajo = await prisma.tbl_trabajos.create({
        data: {
            trabajos_cargo: data.cargo,
            trabajos_modalidad: data.modalidad,
            trabajos_jornada: data.jornada,
            trabajos_salario: data.salario,
            trabajos_publicado: data.publicado,
            id_empresa: data.id_empresa,
        }
    })
    return trabajo;
}

async function actualizarTrabajo(id, data) {
    const trabajo = await prisma.tbl_trabajos.update({
        where: { id_trabajos: parseInt(id) },
        data: {
            trabajos_cargo: data.cargo,
            trabajos_modalidad: data.modalidad,
            trabajos_jornada: data.jornada,
            trabajos_salario: data.salario,
            trabajos_publicado: data.publicado,
        }
    })
    return trabajo;
}

async function eliminarTrabajo(id) {
    const trabajo = await prisma.tbl_trabajos.delete({
        where: { id_trabajos: parseInt(id) },
    })
    return trabajo;
}

module.exports = {
    getTrabajos,
    getTrabajosById,
    crearTrabajo,
    actualizarTrabajo,
    eliminarTrabajo
}