import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto, UpdateScheduleDto } from './dto/schedule.dto';
import { parse } from 'path';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Get('')
  getAll() {
    return this.scheduleService.getAll()
  }

  @Get(':id')
  getById(@Param('id') id: string) {

    return this.scheduleService.getById(parseInt(id));
  }

  @Post()
  create(@Body() schedule: CreateScheduleDto) {
    return this.scheduleService.create(schedule);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() schedule: UpdateScheduleDto) {
    return this.scheduleService.update(parseInt(id), schedule);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.scheduleService.delete(parseInt(id));
  }
}
