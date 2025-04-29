import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto/discipline.dto';

@Injectable()
export class DisciplinesService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return await this.prisma.disciplines.findMany();
    }

    async getById(id: number) {
        return await this.prisma.disciplines.findUnique({
            where: {
                id
            }
        });
    }

    async create(entity: CreateDisciplineDto) {
        return await this.prisma.disciplines.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateDisciplineDto) {
        return await this.prisma.disciplines.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.disciplines.delete({
            where: {
                id
            }
        });
    }
}
