/*
  Warnings:

  - You are about to drop the column `activityType` on the `Tariffication` table. All the data in the column will be lost.
  - You are about to drop the column `disciplineName` on the `Tariffication` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `Tariffication` table. All the data in the column will be lost.
  - You are about to drop the column `teacher` on the `Tariffication` table. All the data in the column will be lost.
  - You are about to drop the column `activityType` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `disciplineName` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `subGroup` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `teacher` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedules` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `activityTypeID` to the `Tariffication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `disciplineID` to the `Tariffication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupID` to the `Tariffication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherID` to the `Tariffication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tarifficationID` to the `activities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tariffication" DROP CONSTRAINT "Tariffication_groupId_fkey";

-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_scheduleId_fkey";

-- AlterTable
ALTER TABLE "Tariffication" DROP COLUMN "activityType",
DROP COLUMN "disciplineName",
DROP COLUMN "groupId",
DROP COLUMN "teacher",
ADD COLUMN     "activityTypeID" INTEGER NOT NULL,
ADD COLUMN     "disciplineID" INTEGER NOT NULL,
ADD COLUMN     "groupID" INTEGER NOT NULL,
ADD COLUMN     "teacherID" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "activityType",
DROP COLUMN "disciplineName",
DROP COLUMN "group",
DROP COLUMN "subGroup",
DROP COLUMN "teacher",
ADD COLUMN     "tarifficationID" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "schedules";

-- CreateTable
CREATE TABLE "Groups" (
    "id" SERIAL NOT NULL,
    "groupName" TEXT NOT NULL,

    CONSTRAINT "Groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tariffication" ADD CONSTRAINT "Tariffication_disciplineID_fkey" FOREIGN KEY ("disciplineID") REFERENCES "Disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tariffication" ADD CONSTRAINT "Tariffication_groupID_fkey" FOREIGN KEY ("groupID") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tariffication" ADD CONSTRAINT "Tariffication_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tariffication" ADD CONSTRAINT "Tariffication_activityTypeID_fkey" FOREIGN KEY ("activityTypeID") REFERENCES "ActivityTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_tarifficationID_fkey" FOREIGN KEY ("tarifficationID") REFERENCES "Tariffication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
