/*
  Warnings:

  - You are about to drop the column `group` on the `Tariffication` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Tariffication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tariffication" DROP COLUMN "group",
ADD COLUMN     "groupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tariffication" ADD CONSTRAINT "Tariffication_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
