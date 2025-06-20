import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class DonatePriceService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return await this.prisma.donatePriceList.findMany();
  }
}
