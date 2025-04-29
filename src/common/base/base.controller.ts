import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './base.service';

@Controller('base')
export class BaseController<T> {
  constructor(private readonly service: BaseService<T>) { }

  @Get()
  findAll() {
    return this.service.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: number){
    return this.service.findOne(id);
  }
  @Post()
  create(@Body() entity: T): T {
    return this.service.create(entity);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedEntity: T): T {
    return this.service.update(id, updatedEntity);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.service.remove(id);
  }
}