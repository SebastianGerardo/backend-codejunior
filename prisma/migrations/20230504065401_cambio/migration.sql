/*
  Warnings:

  - You are about to alter the column `trabajos_publicado` on the `tbl_trabajos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `VarChar(11)`.
  - Made the column `experiencia_ffin` on table `tbl_experiencia` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tbl_experiencia` MODIFY `experiencia_finicio` VARCHAR(11) NOT NULL,
    MODIFY `experiencia_ffin` VARCHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_trabajos` MODIFY `trabajos_publicado` VARCHAR(11) NOT NULL;
