const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function enviarMensajeDes (mensaje) {
  const mensajeCreado = await prisma.tbl_mensaje_des.create({
    data: {
      mensaje_des_mensaje: mensaje.mensaje_des_mensaje,
      mensaje_des_fecha: mensaje.mensaje_des_fecha,
      id_desarrollador: mensaje.id_desarrollador,
      id_sala: mensaje.id_sala,
    }
  });
  return mensajeCreado;
}

async function enviarMensajeEmp (mensaje) {
    const mensajeCreado = await prisma.tbl_mensaje_emp.create({
        data: {
        mensaje_emp_mensaje: mensaje.mensaje_emp_mensaje,
        mensaje_emp_fecha: mensaje.mensaje_emp_fecha,
        id_empresa: mensaje.id_empresa,
        id_sala: mensaje.id_sala,
        }
    });
    return mensajeCreado;
}

async function getMensajeDes (id) {
    const mensajes = await prisma.tbl_mensaje_des.findMany({
        select: {
            id_mensaje_des: true,
            mensaje_des_mensaje: true,
            mensaje_des_fecha: true,
            id_desarrollador: true,
            id_sala: true,
        },
        where: {
            id_sala: parseInt(id)
        }
    });
    return mensajes;
}

async function getMensajeEmp (id) {
    const mensajes = await prisma.tbl_mensaje_emp.findMany({
        select: {
            id_mensaje_emp: true,
            mensaje_emp_mensaje: true,
            mensaje_emp_fecha: true,
            id_empresa: true,
            id_sala: true,
        },
        where: {
            id_sala: parseInt(id)
        }
    });
    return mensajes;
}

module.exports = {
    enviarMensajeDes,
    enviarMensajeEmp,
    getMensajeDes,
    getMensajeEmp
}
