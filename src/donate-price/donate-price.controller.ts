import { Controller, Get } from '@nestjs/common';
import { DonatePriceService } from './donate-price.service';

@Controller('donate-price')
export class DonatePriceController {
  constructor(private readonly donatePriceService: DonatePriceService) {}

  @Get()
  findAll() {
    return this.donatePriceService.findAll();
  }
}
