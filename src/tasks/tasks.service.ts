import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

const tasks = [
      { id: 1, icon: '', description: 'Подпишись на Телеграм-канал', reward: 200, isCompleted: false },
      { id: 2, icon: '', description: 'Пригласи в игру друга — Вдвоем всегда веселее!', reward: 200, isCompleted: true },
    ];

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTaskDto: CreateTaskDto) {
    return "await this.prisma.tasks.create({ data: createTaskDto })";
  }

  async findAll() {
    return await this.prisma.tasks.findMany();
  }

  async tasksCount() {
    return await this.prisma.tasks.count();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
