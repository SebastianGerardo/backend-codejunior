/*
  Warnings:

  - You are about to drop the column `desarrollador_contraseña` on the `tbl_desarrollador` table. All the data in the column will be lost.
  - You are about to drop the column `empresa_contraseña` on the `tbl_empresa` table. All the data in the column will be lost.
  - Added the required column `desarrollador_password` to the `tbl_desarrollador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa_password` to the `tbl_empresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_desarrollador` DROP COLUMN `desarrollador_contraseña`,
    ADD COLUMN `desarrollador_password` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_empresa` DROP COLUMN `empresa_contraseña`,
    ADD COLUMN `empresa_password` VARCHAR(250) NOT NULL;
