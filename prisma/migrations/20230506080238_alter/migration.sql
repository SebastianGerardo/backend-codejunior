/*
  Warnings:

  - You are about to drop the column `mensaje_des_fecha` on the `tbl_mensaje_des` table. All the data in the column will be lost.
  - You are about to drop the column `mensaje_des_mensaje` on the `tbl_mensaje_des` table. All the data in the column will be lost.
  - You are about to drop the column `mensaje_emp_fecha` on the `tbl_mensaje_emp` table. All the data in the column will be lost.
  - You are about to drop the column `mensaje_emp_mensaje` on the `tbl_mensaje_emp` table. All the data in the column will be lost.
  - Added the required column `fecha` to the `tbl_mensaje_des` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mensaje` to the `tbl_mensaje_des` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `tbl_mensaje_emp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mensaje` to the `tbl_mensaje_emp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_mensaje_des` DROP COLUMN `mensaje_des_fecha`,
    DROP COLUMN `mensaje_des_mensaje`,
    ADD COLUMN `fecha` VARCHAR(45) NOT NULL,
    ADD COLUMN `mensaje` VARCHAR(250) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_mensaje_emp` DROP COLUMN `mensaje_emp_fecha`,
    DROP COLUMN `mensaje_emp_mensaje`,
    ADD COLUMN `fecha` VARCHAR(45) NOT NULL,
    ADD COLUMN `mensaje` VARCHAR(250) NOT NULL;
