import { Module } from '@nestjs/common';
import { ClassRoomsService } from './class-rooms.service';
import { ClassRoomsController } from './class-rooms.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClassRoomsController],
  providers: [ClassRoomsService, PrismaService],
})
export class ClassRoomsModule {}
