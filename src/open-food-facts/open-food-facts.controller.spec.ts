import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsController } from './open-food-facts.controller';
import { OpenFoodFactsService } from './open-food-facts.service';

describe('OpenFoodFactsController', () => {
  let controller: OpenFoodFactsController;

  const mockOpenFoodFact = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenFoodFactsController],
      providers: [OpenFoodFactsService],
    })
      .overrideProvider(OpenFoodFactsService)
      .useValue(mockOpenFoodFact)
      .compile();

    controller = module.get<OpenFoodFactsController>(OpenFoodFactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
