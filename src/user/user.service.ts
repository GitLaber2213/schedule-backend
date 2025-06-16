import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prisma.users.create({ data: createUserDto });
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({ where: { telegramId: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.prisma.users.update({ where: { telegramId: id }, data: updateUserDto });
  }
}
