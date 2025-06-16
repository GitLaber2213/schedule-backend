import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectsHistoryService } from './objects-history.service';
import { CreateObjectsHistoryDto } from './dto/create-objects-history.dto';

@Controller('objects-history')
export class ObjectsHistoryController {
  constructor(private readonly objectsHistoryService: ObjectsHistoryService) {}

  @Post()
  create(@Body() createObjectsHistoryDto: CreateObjectsHistoryDto) {
    return this.objectsHistoryService.create(createObjectsHistoryDto);
  }

  @Get()
  findAll() {
    return this.objectsHistoryService.findAll();
  }
}
