-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'NOTPAID');

-- AlterTable
ALTER TABLE "BountyTable" ADD COLUMN     "status" "PaymentStatus" NOT NULL DEFAULT 'NOTPAID';
