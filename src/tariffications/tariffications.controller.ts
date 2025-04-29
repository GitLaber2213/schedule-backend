import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TarifficationsService } from './tariffications.service';
import { CreateTarifficationDto, UpdateTarifficationDto } from './dto/tariffication.dto';

@Controller('tariffications')
export class TarifficationsController {
  constructor(private readonly tarifficationsService: TarifficationsService) { }

  @Get('')
  getAll() {
    return this.tarifficationsService.getAll();
  }

  @Get(':id')
  getById(@Param("id") id: string) {

    return this.tarifficationsService.getById(parseInt(id));
  }

  @Post('')
  create(@Body() entity: CreateTarifficationDto) {
    return this.tarifficationsService.create(entity);
  }

  @Put(':id')
  updateTariffication(@Body() entity: UpdateTarifficationDto, @Param("id") id: string) {
    return this.tarifficationsService.update(parseInt(id), entity);
  }

  @Delete(':id')
  deleteTariffication(@Param("id") id: string) {
    return this.tarifficationsService.delete(parseInt(id));
  }


}
