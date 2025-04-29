import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto/discipline.dto';

@Controller('disciplines')
export class DisciplinesController {
  constructor(private readonly disciplinesService: DisciplinesService) { }

  @Get('')
  getAll() {
    return this.disciplinesService.getAll();
  }

  @Get(':id')
  getById(@Param("id") id: string) {

    return this.disciplinesService.getById(parseInt(id));
  }

  @Post('')
  create(@Body() entity: CreateDisciplineDto) {
    return this.disciplinesService.create(entity);
  }

  @Put(':id')
  updateTariffication(@Body() entity: UpdateDisciplineDto, @Param("id") id: string) {
    return this.disciplinesService.update(parseInt(id), entity);
  }

  @Delete(':id')
  deleteTariffication(@Param("id") id: string) {
    return this.disciplinesService.delete(parseInt(id));
  }
}
