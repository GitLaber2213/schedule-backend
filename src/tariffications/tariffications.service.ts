import { Injectable } from '@nestjs/common';
import { CreateTarifficationDto, UpdateTarifficationDto } from './dto/tariffication.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TarifficationsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return this.prisma.tariffication.findMany({
            include: {
                disciplineName: {
                    select: {
                        disciplineName: true
                    }
                },
                group: {
                    select: {
                        groupName: true
                    }
                },
                teacher: {
                    select: {
                        fullName: true
                    }
                },
                activityType: {
                    select: {
                        activityType: true
                    }
                }
            }
        }).then(results => {
            return results.map(result => ({
                id: result.id,
                discipline: result.disciplineName.disciplineName,
                group: result.group.groupName,
                teacher: result.teacher.fullName,
                activityType: result.activityType.activityType,
                subGroup: result.subGroup,
                activityYearHours: result.activityYearHours,
            }));
        });
    };

    async getById(id: number) {
        const result = await this.prisma.tariffication.findUnique({
            where: {
                id
            },
            include: {
                disciplineName: {
                    select: {
                        disciplineName: true
                    }
                },
                group: {
                    select: {
                        groupName: true
                    }
                },
                teacher: {
                    select: {
                        fullName: true
                    }
                },
                activityType: {
                    select: {
                        activityType: true
                    }
                }
            }
        });

        if (!result) {
            return null;
        }

        return {
            id: result.id,
            discipline: result.disciplineName.disciplineName,
            group: result.group.groupName,
            teacher: result.teacher.fullName,
            activityType: result.activityType.activityType,
            subGroup: result.subGroup,
            activityYearHours: result.activityYearHours,
        };
    }

    async create(entity: CreateTarifficationDto) {
        return await this.prisma.tariffication.create({
            data: {
                ...entity
            }
        });
    };

    async update(id: number, entity: UpdateTarifficationDto) {
        return await this.prisma.tariffication.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    };

    async delete(id: number) {
        return await this.prisma.tariffication.delete({
            where: {
                id
            }
        });
    }
}
