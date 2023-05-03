const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

async function loginUser(data) {
    if (data?.tipo == "desarrollador") {
        const user = await prisma.tbl_desarrollador.findFirst({
            where: {
                desarrollador_email: data.email,
            },
        });

        if (!user) {
            return null;
        }

        const validatePassword = await bcrypt.compare(
            data.password,
            user.desarrollador_password,
        );

        if (!validatePassword) {
            return null;
        }

        const token = jwt.sign(
            { id: user.id_desarrollador, correo: user.desarrollador_email, tipo: data.tipo },
            process.env.JWT_SECRET, //chapa del env
            {
                expiresIn: "1d",
            }
        );

        return { token };
    } else if (data?.tipo == "empresa") {

        const user = await prisma.tbl_empresa.findFirst({
            where: {
                empresa_email: data.email,
            },
        });

        console.log("soy el user", user);

        if (!user) {
            return null;
        }

        const validatePassword = await bcrypt.compare(
            data.password,
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

        console.log("soy el token", token);

        return { token };
    }
}

module.exports = {
    loginUser
};