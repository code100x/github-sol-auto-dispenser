/*
  Warnings:

  - The primary key for the `Repo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `ownerUsername` to the `Repo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Repo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Repo" DROP CONSTRAINT "Repo_pkey",
ADD COLUMN     "ownerUsername" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD CONSTRAINT "Repo_pkey" PRIMARY KEY ("id");
