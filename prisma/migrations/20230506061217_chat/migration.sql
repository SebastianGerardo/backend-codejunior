-- CreateTable
CREATE TABLE `tbl_sala` (
    `id_sala` INTEGER NOT NULL AUTO_INCREMENT,
    `id_empresa` INTEGER NOT NULL,
    `id_desarrollador` INTEGER NOT NULL,

    INDEX `fk_tbl_sala_tbl_empresa1`(`id_empresa`),
    INDEX `fk_tbl_sala_tbl_desarrollador1`(`id_desarrollador`),
    PRIMARY KEY (`id_sala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_mensaje_emp` (
    `id_mensaje_emp` INTEGER NOT NULL AUTO_INCREMENT,
    `mensaje_emp_mensaje` VARCHAR(250) NOT NULL,
    `mensaje_emp_fecha` VARCHAR(45) NOT NULL,
    `id_empresa` INTEGER NOT NULL,
    `id_sala` INTEGER NOT NULL,

    INDEX `fk_tbl_mensaje_emp_tbl_empresa1`(`id_empresa`),
    INDEX `fk_tbl_mensaje_emp_tbl_sala1`(`id_sala`),
    PRIMARY KEY (`id_mensaje_emp`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_mensaje_des` (
    `id_mensaje_des` INTEGER NOT NULL AUTO_INCREMENT,
    `mensaje_des_mensaje` VARCHAR(250) NOT NULL,
    `mensaje_des_fecha` VARCHAR(45) NOT NULL,
    `id_desarrollador` INTEGER NOT NULL,
    `id_sala` INTEGER NOT NULL,

    INDEX `fk_tbl_mensaje_des_tbl_desarrollador1`(`id_desarrollador`),
    INDEX `fk_tbl_mensaje_des_tbl_sala1`(`id_sala`),
    PRIMARY KEY (`id_mensaje_des`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_sala` ADD CONSTRAINT `fk_tbl_sala_tbl_empresa1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresa`(`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_sala` ADD CONSTRAINT `fk_tbl_sala_tbl_desarrollador1` FOREIGN KEY (`id_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_mensaje_emp` ADD CONSTRAINT `fk_tbl_mensaje_emp_tbl_empresa1` FOREIGN KEY (`id_empresa`) REFERENCES `tbl_empresa`(`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_mensaje_emp` ADD CONSTRAINT `fk_tbl_mensaje_emp_tbl_sala1` FOREIGN KEY (`id_sala`) REFERENCES `tbl_sala`(`id_sala`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_mensaje_des` ADD CONSTRAINT `fk_tbl_mensaje_des_tbl_desarrollador1` FOREIGN KEY (`id_desarrollador`) REFERENCES `tbl_desarrollador`(`id_desarrollador`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_mensaje_des` ADD CONSTRAINT `fk_tbl_mensaje_des_tbl_sala1` FOREIGN KEY (`id_sala`) REFERENCES `tbl_sala`(`id_sala`) ON DELETE NO ACTION ON UPDATE NO ACTION;
