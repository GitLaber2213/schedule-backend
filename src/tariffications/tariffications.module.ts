import { Module } from '@nestjs/common';
import { TarifficationsService } from './tariffications.service';
import { TarifficationsController } from './tariffications.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TarifficationsController],
  providers: [TarifficationsService, PrismaService],
})
export class TarifficationsModule {}
