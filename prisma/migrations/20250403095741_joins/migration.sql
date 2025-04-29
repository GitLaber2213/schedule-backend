-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_tarifficationID_fkey";

-- AlterTable
ALTER TABLE "activities" ALTER COLUMN "tarifficationID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_tarifficationID_fkey" FOREIGN KEY ("tarifficationID") REFERENCES "Tariffication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
