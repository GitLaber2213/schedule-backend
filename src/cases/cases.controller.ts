import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) { }

  @Post()
  create(@Body() createCaseDto: CreateCaseDto) {
    return this.casesService.create(createCaseDto);
  }

  @Get()
  findAll() {
    return this.casesService.findAll();
  }

  @Get('roulette')
  generateLoot() {
    return this.casesService.generateLootArray();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casesService.findOne(+id);
  }
}
