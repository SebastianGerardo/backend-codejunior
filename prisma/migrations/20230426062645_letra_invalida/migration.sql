-- CreateTable
CREATE TABLE `tbl_desarrollador` (
    `id_desarrollador` INTEGER NOT NULL AUTO_INCREMENT,
    `desarrollador_nombre` VARCHAR(50) NOT NULL,
    `desarrollador_apellido` VARCHAR(50) NOT NULL,
    `desarrollador_cargo` VARCHAR(100) NOT NULL,
    `desarrollador_email` VARCHAR(200) NOT NULL,
    `desarrollador_contraseña` VARCHAR(200) NOT NULL,
    `desarrollador_telefono` INTEGER NULL,
    `desarrollador_descripcion` LONGTEXT NULL,
    `desarrollador_foto` VARCHAR(250) NULL,

    PRIMARY KEY (`id_desarrollador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_desarrollador_redes` (
    `id_desarrollador_redes` INTEGER NOT NULL AUTO_INCREMENT,
    `desarrollador_redes_url` VARCHAR(250) NOT NULL,
    `tbl_desarrollador` INTEGER NOT NULL,
    `tbl_redes` INTEGER NOT NULL,

    INDEX `fk_tbl_desarrollador_redes_tbl_desarrollador1`(`tbl_desarrollador`),
    INDEX `fk_tbl_desarrollador_redes_tbl_redes1`(`tbl_redes`),
    PRIMARY KEY (`id_desarrollador_redes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_desarrollador_tecnologia` (
    `idtbl_desarrollador_tecnologia` INTEGER NOT NULL AUTO_INCREMENT,
    `tbl_desarrollador` INTEGER NOT NULL,
    `tbl_tecnologia` INTEGER NOT NULL,

    INDEX `fk_tbl_desarrollador_tecnologia_tbl_desarrollador1`(`tbl_desarrollador`),
    INDEX `fk_tbl_desarrollador_tecnologia_tbl_tecnologia1`(`tbl_tecnologia`),
    PRIMARY KEY (`idtbl_desarrollador_tecnologia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_desarrollador_trabajos` (
    `idtbl_desarrollador_trabajos` INTEGER NOT NULL AUTO_INCREMENT,
    `desarrollador_trabajos_chat` VARCHAR(1) NULL,
    `id_desarrollador` INTEGER NOT NULL,
    `id_trabajos` INTEGER NOT NULL,

    INDEX `fk_tbl_desarrollador_trabajos_tbl_desarrollador1`(`id_desarrollador`),
    INDEX `fk_tbl_desarrollador_trabajos_tbl_trabajos1`(`id_trabajos`),
    PRIMARY KEY (`idtbl_desarrollador_trabajos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_educacion` (
    `id_educacion` INTEGER NOT NULL AUTO_INCREMENT,
    `educacion_institucion` VARCHAR(150) NOT NULL,
    `educacion_carrera` VARCHAR(100) NOT NULL,
    `educacion_certificado` VARCHAR(250) NULL,
    `educacion_foto` VARCHAR(250) NULL,
    `tbl_desarrollador` INTEGER NOT NULL,

    INDEX `fk_tbl_educacion_tbl_desarrollador1`(`tbl_desarrollador`),
    PRIMARY KEY (`id_educacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_empresa` (
    `id_empresa` INTEGER NOT NULL AUTO_INCREMENT,
    `empresa_razon_social` VARCHAR(100) NOT NULL,
    `empresa_ruc` VARCHAR(11) NOT NULL,
    `empresa_telefono` INTEGER NULL,
    `empresa_descripcion` LONGTEXT NOT NULL,
    `empresa_foto` VARCHAR(250) NULL,
    `empresa_encargado` VARCHAR(100) NOT NULL,
    `empresa_email` VARCHAR(250) NOT NULL,
    `empresa_contraseña` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id_empresa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_empresa_red` (
    `idtbl_empresa_red` INTEGER NOT NULL AUTO_INCREMENT,
    `empresa_red_url` VARCHAR(45) NOT NULL,
    `id_redes` INTEGER NOT NULL,
    `id_empresa` INTEGER NOT NULL,

    INDEX `fk_tbl_empresa_red_tbl_empresa1`(`id_empresa`),
    INDEX `fk_tbl_empresa_red_tbl_redes1`(`id_redes`),
    PRIMARY KEY (`idtbl_empresa_red`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_empresa_tecnologia` (
    `idtbl_empresa_tecnologia` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tecnologia` INTEGER NOT NULL,
    `id_empresa` INTEGER NOT NULL,

    INDEX `fk_tbl_empresa_tecnologia_tbl_empresa1`(`id_empresa`),
    INDEX `fk_tbl_empresa_tecnologia_tbl_tecnologia1`(`id_tecnologia`),
    PRIMARY KEY (`idtbl_empresa_tecnologia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_experiencia` (
    `id_experiencia` INTEGER NOT NULL AUTO_INCREMENT,
    `experiencia_empresa` VARCHAR(50) NOT NULL,
    `experiencia_cargo` VARCHAR(100) NOT NULL,
    `experiencia_finicio` DATE NOT NULL,
    `experiencia_ffin` DATE NULL,
    `experiencia_logo` VARCHAR(45) NULL,
    `tbl_desarrollador` INTEGER NOT NULL,

    INDEX `fk_tbl_experiencia_tbl_desarrollador`(`tbl_desarrollador`),
    PRIMARY KEY (`id_experiencia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_redes` (
    `id_redes` INTEGER NOT NULL AUTO_INCREMENT,
    `redes_redes` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id_redes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_tecnologia` (
    `id_tecnologia` INTEGER NOT NULL AUTO_INCREMENT,
    `tecnologia_nombre` VARCHAR(50) NOT NULL,
    `tecnologia_imagen` VARCHAR(250) NOT NULL,

    PRIMARY KEY (`id_tecnologia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trabajos` (
    `id_trabajos` INTEGER NOT NULL AUTO_INCREMENT,
    `trabajos_cargo` VARCHAR(45) NOT NULL,
    `trabajos_modalidad` VARCHAR(45) NOT NULL,
    `trabajos_jornada` VARCHAR(45) NOT NULL,
    `trabajos_salario` VARCHAR(45) NULL,
    `trabajos_publicado` VARCHAR(45) NOT NULL,
    `id_empresa` INTEGER NOT NULL,

    INDEX `fk_tbl_trabajos_tbl_empresa1`(`id_empresa`),
    PRIMARY KEY (`id_trabajos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_trabajos_tecnologia` (
    `id_trabajos_tecnologia` INTEGER NOT NULL AUTO_INCREMENT,
    `id_tecnologia` INTEGER NOT NULL,
    `id_trabajos` INTEGER NOT NULL,

    INDEX `fk_tbl_puesto_trab_tecnologia_tbl_tecnologia1`(`id_tecnologia`),
    INDEX `fk_tbl_trabajos_tecnologia_tbl_trabajos1`(`id_trabajos`),
    PRIMARY KEY (`id_trabajos_tecnologia`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_redes` ADD CONSTRAINT `fk_tbl_desarrollador_redes_tbl_desarrollador1` FOREIGN KEY (`tbl_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_redes` ADD CONSTRAINT `fk_tbl_desarrollador_redes_tbl_redes1` FOREIGN KEY (`tbl_redes`) REFERENCES `tbl_redes`(`id_redes`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_tecnologia` ADD CONSTRAINT `fk_tbl_desarrollador_tecnologia_tbl_desarrollador1` FOREIGN KEY (`tbl_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_tecnologia` ADD CONSTRAINT `fk_tbl_desarrollador_tecnologia_tbl_tecnologia1` FOREIGN KEY (`tbl_tecnologia`) REFERENCES `tbl_tecnologia`(`id_tecnologia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_trabajos` ADD CONSTRAINT `fk_tbl_desarrollador_trabajos_tbl_desarrollador1` FOREIGN KEY (`id_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_desarrollador_trabajos` ADD CONSTRAINT `fk_tbl_desarrollador_trabajos_tbl_trabajos1` FOREIGN KEY (`id_trabajos`) REFERENCES `tbl_trabajos`(`id_trabajos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_educacion` ADD CONSTRAINT `fk_tbl_educacion_tbl_desarrollador1` FOREIGN KEY (`tbl_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_empresa_red` ADD CONSTRAINT `fk_tbl_empresa_red_tbl_empresa1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresa`(`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_empresa_red` ADD CONSTRAINT `fk_tbl_empresa_red_tbl_redes1` FOREIGN KEY (`id_redes`) REFERENCES `tbl_redes`(`id_redes`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_empresa_tecnologia` ADD CONSTRAINT `fk_tbl_empresa_tecnologia_tbl_empresa1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresa`(`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_empresa_tecnologia` ADD CONSTRAINT `fk_tbl_empresa_tecnologia_tbl_tecnologia1` FOREIGN KEY (`id_tecnologia`) REFERENCES `tbl_tecnologia`(`id_tecnologia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_experiencia` ADD CONSTRAINT `fk_tbl_experiencia_tbl_desarrollador` FOREIGN KEY (`tbl_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_trabajos` ADD CONSTRAINT `fk_tbl_trabajos_tbl_empresa1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresa`(`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_trabajos_tecnologia` ADD CONSTRAINT `fk_tbl_puesto_trab_tecnologia_tbl_tecnologia1` FOREIGN KEY (`id_tecnologia`) REFERENCES `tbl_tecnologia`(`id_tecnologia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_trabajos_tecnologia` ADD CONSTRAINT `fk_tbl_trabajos_tecnologia_tbl_trabajos1` FOREIGN KEY (`id_trabajos`) REFERENCES `tbl_trabajos`(`id_trabajos`) ON DELETE NO ACTION ON UPDATE NO ACTION;
