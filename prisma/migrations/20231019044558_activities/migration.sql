/*
  Warnings:

  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hora` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `task` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `actividades` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagen` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oes` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `turno` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tasks` DROP PRIMARY KEY,
    DROP COLUMN `hora`,
    DROP COLUMN `task`,
    ADD COLUMN `actividades` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagen` VARCHAR(191) NOT NULL,
    ADD COLUMN `oes` VARCHAR(191) NOT NULL,
    ADD COLUMN `turno` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
