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
        id_tecnologia: {
          select: {
            id_tecnologia: true,
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
        id_redes: {
          select: {
            redes_redes: true
          }
        }
      },
      where: {
        tbl_desarrollador: parseInt(id)
      }
    })

    const chat = await prisma.tbl_sala.findMany({
      select: {
        id_sala: true,
        id_empresa: true,
        id_desarrollador: true,
        tbl_empresa: {
          select: {
            empresa_razon_social: true,
            empresa_foto: true,
            empresa_encargado: true,
            empresa_nombre: true
          }
        },
        mensaje_des: {
          select: {
            id_mensaje_des: true,
            mensaje: true,
            fecha: true,
            id_desarrollador: true,
            id_sala: true,
            tbl_desarrollador: {
              select: {
                desarrollador_nombre: true,
                desarrollador_apellido: true,
                desarrollador_foto: true,
              }
            }
          }
        },
        mensaje_emp: {
          select: {
            id_mensaje_emp: true,
            mensaje: true,
            fecha: true,
            id_empresa: true,
            id_sala: true,
            tbl_empresa: {
              select: {
                empresa_razon_social: true,
                empresa_foto: true,
                empresa_encargado: true,
                empresa_nombre: true
              }
            }
          }
        }
      },
      where: {
        OR: [
          {
            id_desarrollador: parseInt(id)
          }
        ]
      },
    })

    const user = {
      ...desarrollador,
      experiencia: experiencia,
      educacion: educacion,
      tecnologias:tecnologias,
      redes : redes,
      chat: chat
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
  //const salt = await bcrypt.genSalt(10);
  //const hashedPassword = await bcrypt.hash(data.desarrollador_password, salt);
  const user = await prisma.tbl_desarrollador.update({
    where: {
      id_desarrollador: parseInt(id),
    },
    data: {
      desarrollador_nombre: data.desarrollador_nombre,
      desarrollador_apellido: data.desarrollador_apellido,
      desarrollador_cargo: data.desarrollador_cargo,
      desarrollador_email: data.desarrollador_email,
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
