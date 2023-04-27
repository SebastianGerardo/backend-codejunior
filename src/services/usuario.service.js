const bcrypt = require('bcrypt');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

async function create({usuario}) {
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(usuario.usuario_password, salt);
 const user = await prisma.tbl_usuario.create({
    data: {
        usuario_email: usuario.usuario_email,
        usuario_password: usuario.usuario_password,                                                 
    }
 })
    return user;
}

async function authenticate({usuario}) {
    const user = await prisma.tbl_usuario.findUnique({
        where: {
            usuario_email: usuario.usuario_email,
            usuario_password: usuario.usuario_password
        }
    });
    return user;
}