import { Module } from '@nestjs/common';
import { OpenFoodFactsService } from './open-food-facts.service';
import { OpenFoodFactsController } from './open-food-facts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [OpenFoodFactsService],
  controllers: [OpenFoodFactsController],
  exports: [OpenFoodFactsService],
  imports: [HttpModule],
})
export class OpenFoodFactsModule {}
