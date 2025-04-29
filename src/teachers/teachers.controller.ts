import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

    @Get('')
    getAll() {
      return this.teachersService.getAll();
    }
  
    @Get(':id')
    getById(@Param("id") id: string) {
  
      return this.teachersService.getById(parseInt(id));
    }
  
    @Post('')
    create(@Body() entity: CreateTeacherDto) {
      return this.teachersService.create(entity);
    }
  
    @Put(':id')
    updateTariffication(@Body() entity: UpdateTeacherDto, @Param("id") id: string) {
      return this.teachersService.update(parseInt(id), entity);
    }
  
    @Delete(':id')
    deleteTariffication(@Param("id") id: string) {
      return this.teachersService.delete(parseInt(id));
    }
}
