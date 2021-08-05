import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('open-food-facts')
export class OpenFoodFactsController {
  constructor(
    private openfoodFacts: OpenFoodFactsService,
    private httpService: HttpService,
  ) {}
  @UseGuards(JwtAuthGuard)
  @Get('/barcode/:id')
  async barcode(@Param('id') id: string) {
    const url =
      'https://world.openfoodfacts.org/api/v0/product/' + id + '.json';
    const test = await axios.get(url);
    const res = this.httpService
      .get(url)
      .pipe(map((response) => response.data));
    console.log(res);

    return res;
  }
}
