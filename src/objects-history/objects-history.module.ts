import { Module } from '@nestjs/common';
import { ObjectsHistoryService } from './objects-history.service';
import { ObjectsHistoryController } from './objects-history.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ObjectsHistoryController],
  providers: [ObjectsHistoryService, PrismaService],
})
export class ObjectsHistoryModule {}
