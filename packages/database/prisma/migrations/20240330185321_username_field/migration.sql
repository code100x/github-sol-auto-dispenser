/*
  Warnings:

  - You are about to drop the column `email` on the `BountyTable` table. All the data in the column will be lost.
  - Added the required column `username` to the `BountyTable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BountyTable" DROP COLUMN "email",
ADD COLUMN     "username" TEXT NOT NULL;
