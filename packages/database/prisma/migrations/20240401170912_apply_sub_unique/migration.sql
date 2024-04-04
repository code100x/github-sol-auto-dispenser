/*
  Warnings:

  - A unique constraint covering the columns `[sub]` on the table `UserMaintainer` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `sub` on the `UserMaintainer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserMaintainer" DROP COLUMN "sub",
ADD COLUMN     "sub" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserMaintainer_sub_key" ON "UserMaintainer"("sub");
