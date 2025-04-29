import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGroupDto, UpdateGroupDto } from './dto/group.dto';

@Injectable()
export class GroupsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAll() {
        return await this.prisma.groups.findMany();
    }

    async getById(id: number) {
        return await this.prisma.groups.findUnique({
            where: {
                id
            }
        });
    }

    async create(entity: CreateGroupDto) {
        return await this.prisma.groups.create({
            data: {
                ...entity
            }
        });
    }

    async update(id: number, entity: UpdateGroupDto) {
        return await this.prisma.groups.update({
            where: {
                id
            },
            data: {
                ...entity
            }
        });
    }

    async delete(id: number) {
        return await this.prisma.groups.delete({
            where: {
                id
            }
        });
    }

    async deleteMany(ids: number[]) {
        return await this.prisma.groups.deleteMany({
            where: {
                id: {
                    in: ids
                }
            }
        });
    }

}
