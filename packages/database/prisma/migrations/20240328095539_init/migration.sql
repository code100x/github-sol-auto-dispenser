-- CreateTable
CREATE TABLE "UserContributor" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "UserContributor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMaintainer" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "avatar" TEXT,

    CONSTRAINT "UserMaintainer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserContributor_username_key" ON "UserContributor"("username");
