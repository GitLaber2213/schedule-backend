import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateClassRoomDto, UpdateClassRoomDto } from './dto/class-rooms.dto';

@Injectable()
export class ClassRoomsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.classRooms.findMany();
    }

    async getById(id: number) {
        return await this.prisma.classRooms.findUnique({
            where: {
                id
            }
        });
    }

    async create(entity: CreateClassRoomDto) {
        return await this.prisma.classRooms.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateClassRoomDto) {
        return await this.prisma.classRooms.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.classRooms.delete({
            where: {
                id
            }
        });
    }
}
