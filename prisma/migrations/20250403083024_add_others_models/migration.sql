-- CreateTable
CREATE TABLE "schedules" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "teacher" TEXT NOT NULL,
    "activityType" TEXT NOT NULL,
    "activityHours" INTEGER NOT NULL,
    "group" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "classRoom" TEXT NOT NULL,
    "subGroup" TEXT NOT NULL,
    "disciplineName" TEXT NOT NULL,
    "scheduleId" INTEGER NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
