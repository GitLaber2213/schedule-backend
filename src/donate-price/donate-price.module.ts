import { Module } from '@nestjs/common';
import { DonatePriceService } from './donate-price.service';
import { DonatePriceController } from './donate-price.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DonatePriceController],
  providers: [DonatePriceService, PrismaService],
})
export class DonatePriceModule {}
