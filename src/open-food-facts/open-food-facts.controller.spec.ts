import { Test, TestingModule } from '@nestjs/testing';
import { OpenFoodFactsController } from './open-food-facts.controller';

describe('OpenFoodFactsController', () => {
  let controller: OpenFoodFactsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenFoodFactsController],
    }).compile();

    controller = module.get<OpenFoodFactsController>(OpenFoodFactsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
