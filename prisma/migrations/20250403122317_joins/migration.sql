/*
  Warnings:

  - You are about to drop the column `classRoom` on the `activities` table. All the data in the column will be lost.
  - Added the required column `classRoomID` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "activities" DROP COLUMN "classRoom",
ADD COLUMN     "classRoomID" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_classRoomID_fkey" FOREIGN KEY ("classRoomID") REFERENCES "ClassRooms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
