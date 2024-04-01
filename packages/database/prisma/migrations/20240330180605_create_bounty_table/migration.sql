/*
  Warnings:

  - You are about to drop the `UserContributor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserContributor";

-- CreateTable
CREATE TABLE "BountyTable" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BountyTable_pkey" PRIMARY KEY ("id")
);
