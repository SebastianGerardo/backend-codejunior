require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mysql_user: process.env.MYSQL_USER || "root",
    mysql_password: process.env.MYSQL_PWD || "",
    mysql_host: process.env.MYSQL_HOST || "localhost",
    mysql_db: process.env.MYSQL_DB || "db",  //NOMBRE DE LA BASE DE DATOS
    jwt_secret: process.env.JWT_SECRET || "qwerty123"
}

module.exports = { config };