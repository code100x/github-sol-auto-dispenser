/*
  Warnings:

  - Added the required column `repoId` to the `BountyTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BountyTable" ADD COLUMN     "repoId" INTEGER NOT NULL;
