import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClassRoomsService } from './class-rooms.service';
import { CreateClassRoomDto, UpdateClassRoomDto } from './dto/class-rooms.dto';

@Controller('class-rooms')
export class ClassRoomsController {
  constructor(private readonly classRoomsService: ClassRoomsService) { }

  @Get('')
  getAll() {
    return this.classRoomsService.getAll();
  }

  @Get(':id')
  getById(@Param("id") id: string) {
    return this.classRoomsService.getById(parseInt(id));
  }

  @Post('')
  create(@Body() entity: CreateClassRoomDto) {
    return this.classRoomsService.create(entity);
  }

  @Put(':id')
  update(@Body() entity: UpdateClassRoomDto, @Param("id") id: string) {
    return this.classRoomsService.update(parseInt(id), entity);
  }

  @Delete(':id')
  delete(@Param("id") id: string) {
    return this.classRoomsService.delete(parseInt(id));
  }
}
