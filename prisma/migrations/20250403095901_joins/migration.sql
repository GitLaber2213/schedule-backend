/*
  Warnings:

  - Made the column `tarifficationID` on table `activities` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_tarifficationID_fkey";

-- AlterTable
ALTER TABLE "activities" ALTER COLUMN "tarifficationID" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_tarifficationID_fkey" FOREIGN KEY ("tarifficationID") REFERENCES "Tariffication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
