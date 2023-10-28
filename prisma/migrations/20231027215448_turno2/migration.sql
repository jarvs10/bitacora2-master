/*
  Warnings:

  - Added the required column `actividades2` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oes2` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turno2` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` ADD COLUMN `actividades2` VARCHAR(191) NOT NULL,
    ADD COLUMN `oes2` VARCHAR(191) NOT NULL,
    ADD COLUMN `turno2` VARCHAR(191) NOT NULL;
