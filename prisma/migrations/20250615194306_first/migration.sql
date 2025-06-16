-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "telegramId" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,
    "telegramId" INTEGER NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonatePriceList" (
    "id" SERIAL NOT NULL,
    "gameCoins" INTEGER NOT NULL,
    "fiat" INTEGER NOT NULL,
    "tgStars" INTEGER NOT NULL,

    CONSTRAINT "DonatePriceList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cases" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Cases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loot" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "skinName" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "dropChance" DOUBLE PRECISION NOT NULL,
    "caseId" INTEGER NOT NULL,

    CONSTRAINT "Loot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectsHistory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "skinName" TEXT NOT NULL,
    "dateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timeAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "objectOptions" TEXT NOT NULL,
    "telegramId" INTEGER NOT NULL,

    CONSTRAINT "ObjectsHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_telegramId_key" ON "Users"("telegramId");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loot" ADD CONSTRAINT "Loot_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Cases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObjectsHistory" ADD CONSTRAINT "ObjectsHistory_telegramId_fkey" FOREIGN KEY ("telegramId") REFERENCES "Users"("telegramId") ON DELETE RESTRICT ON UPDATE CASCADE;
