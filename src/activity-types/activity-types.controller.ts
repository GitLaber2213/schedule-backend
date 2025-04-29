import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActivityTypesService } from './activity-types.service';
import { CreateActivityTypeDto, UpdateActivityTypeDto } from './dto/activity-types.dto';

@Controller('activity-types')
export class ActivityTypesController {
  constructor(private readonly activityTypesService: ActivityTypesService) { }

  @Get('')
  getAll() {
    return this.activityTypesService.getAll();
  }

  @Get(':id')
  getById(@Param("id") id: string) {
    return this.activityTypesService.getById(parseInt(id));
  }

  @Post('')
  create(@Body() entity: CreateActivityTypeDto) {
    return this.activityTypesService.create(entity);
  }

  @Put(':id')
  update(@Body() entity: UpdateActivityTypeDto, @Param("id") id: string) {
    return this.activityTypesService.update(parseInt(id), entity);
  }

  @Delete(':id')
  delete(@Param("id") id: string) {
    return this.activityTypesService.delete(parseInt(id));
  }

}
