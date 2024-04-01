/*
  Warnings:

  - You are about to drop the column `displayName` on the `UserMaintainer` table. All the data in the column will be lost.
  - Added the required column `username` to the `UserMaintainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserMaintainer" DROP COLUMN "displayName",
ADD COLUMN     "username" TEXT NOT NULL;
