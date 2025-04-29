import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateActivityTypeDto, UpdateActivityTypeDto } from './dto/activity-types.dto';

@Injectable()
export class ActivityTypesService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.activityTypes.findMany();
    }

    async getById(id: number) {
        return await this.prisma.activityTypes.findUnique({
            where: {
                id
            }
        });
    }

    async create(entity: CreateActivityTypeDto) {
        return await this.prisma.activityTypes.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateActivityTypeDto) {
        return await this.prisma.activityTypes.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.activityTypes.delete({
            where: {
                id
            }
        });
    }
}
