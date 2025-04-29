import { Module } from '@nestjs/common';
import { TarifficationsModule } from './tariffications/tariffications.module';
import { ScheduleModule } from './schedule/schedule.module';
import { GroupsModule } from './groups/groups.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { ActivityTypesModule } from './activity-types/activity-types.module';
import { ClassRoomsModule } from './class-rooms/class-rooms.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [TarifficationsModule, ScheduleModule, GroupsModule, DisciplinesModule, ActivityTypesModule, ClassRoomsModule, TeachersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
