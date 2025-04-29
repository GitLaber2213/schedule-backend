import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeachersService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.teachers.findMany();
    }

    async getById(id: number) {
        return await this.prisma.teachers.findUnique({
            where: {
                id
            }
        });
    }

    async create(entity: CreateTeacherDto) {
        return await this.prisma.teachers.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateTeacherDto) {
        return await this.prisma.teachers.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.teachers.delete({
            where: {
                id
            }
        });
    }
}
