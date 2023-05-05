const bcrypt = require("bcrypt");
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function getEmpresa() {
    const users = await prisma.tbl_empresa.findMany();
    return users;
}

async function getEmpresaById(id) {
    const empresa = await prisma.tbl_empresa.findUnique({
        where: { id_empresa: parseInt(id) },
        select: {
          id_empresa: true,
          empresa_email: true,
          empresa_encargado: true,
          empresa_foto: true,
          empresa_descripcion: true,
          empresa_telefono: true,
          empresa_ruc: true,
          empresa_razon_social: true,
        //   empresa_sector: true,
        //   empresa_ubicacion: true,
        }
    });

    const trabajos = await prisma.tbl_trabajos.findMany({
    select: {
        id_trabajos: true,
        trabajos_cargo: true,
        trabajos_modalidad: true,
        trabajos_jornada: true,
        trabajos_salario: true,
        trabajos_publicado: true,
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
    where: {
        id_empresa: parseInt(id)
    }
    })

    const redes = await prisma.tbl_empresa_red.findMany({
      select: {
        idtbl_empresa_red: true,
        empresa_red_url: true,
        tbl_redes: {
          select: {
            redes_redes: true
          }
        }
      },
      where: {
        id_empresa: parseInt(id)
      }
    })

    const user = {
      ...empresa,
      trabajos:trabajos,
      redes : redes
    }

    return user;
}

async function createEmpresa(data) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.empresa_password, salt);
    const user = await prisma.tbl_empresa.create({
        data: {
            empresa_razon_social: data.empresa_razon_social,
            empresa_ruc: data.empresa_ruc,
            empresa_telefono: data.empresa_telefono,
            empresa_descripcion: data.empresa_descripcion,
            empresa_foto: data.empresa_foto,
            empresa_encargado: data.empresa_encargado,
            empresa_email: data.empresa_email,
            empresa_password: hashedPassword
        }
    });
    return user;
}

async function updateEmpresa(id, data) {
    const user = await prisma.tbl_empresa.update({
        where: {
            id_empresa: parseInt(id)
        },
        data: {
            empresa_razon_social: data.empresa_razon_social,
            empresa_ruc: data.empresa_ruc,
            empresa_telefono: data.empresa_telefono,
            empresa_descripcion: data.empresa_descripcion,
            empresa_foto: data.empresa_foto,
            empresa_encargado: data.empresa_encargado,
            empresa_email: data.empresa_email,
            empresa_password: data.empresa_password
        }
    });
    return user;
}

async function deleteEmpresa(id) {
    const user = await prisma.tbl_empresa.delete({
        where: {
            id_empresa: parseInt(id)
        }
    });
    return user;
}

module.exports = {
    getEmpresa,
    getEmpresaById,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}