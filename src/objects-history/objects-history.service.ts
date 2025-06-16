import { Injectable } from '@nestjs/common';
import { CreateObjectsHistoryDto } from './dto/create-objects-history.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ObjectsHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createObjectsHistoryDto: CreateObjectsHistoryDto) {
    return "await this.prisma.objectsHistory.createMany({ data: createObjectsHistoryDto})";
  }

  async findAll() {
    return await this.prisma.objectsHistory.findMany();
  }
}
