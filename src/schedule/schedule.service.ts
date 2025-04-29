import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.schedule.findMany({
            select: {
                id: true,
                date: true,
                activitiesList: {
                    select: {
                        time: true,
                        classRoom: true,
                        activityHours: true,
                        tariffication: {
                            select: {
                                disciplineName: true,
                                activityType: true,
                                activityYearHours: true,
                                group: true,
                                teacher: true,
                                subGroup: true,
                            },
                        },
                    }
                }
            }
        });
    }

    async getById(id: number) {
        return await this.prisma.schedule.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                date: true,
                activitiesList: {
                    select: {
                        time: true,
                        classRoom: true,
                        activityHours: true,
                        tariffication: {
                            select: {
                                disciplineName: true,
                                activityType: true,
                                activityYearHours: true,
                                group: true,
                                teacher: true,
                                subGroup: true,
                            },
                        },
                    }
                }
            }
        });
    }

    async create(entity: CreateScheduleDto) {
        return await this.prisma.schedule.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateScheduleDto) {
        return await this.prisma.schedule.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.schedule.delete({
            where: {
                id
            }
        });
    }
}
