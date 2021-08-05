import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    add: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be create a user', async () => {
    const result = {
      age: 0,
      email: 'test@test.com',
      name: 'dupont',
      password: '12345',
      phone: '0245987411',
      lastname: 'test',
    };
    jest
      .spyOn(controller, 'add')
      .mockImplementation(
        () => new Promise((resolve, reject) => resolve(result)),
      );
  });

  it('should return an array of users', async () => {
    const result = [
      {
        age: 0,
        email: 'test@test.com',
        name: 'dupont',
        password: '12345',
        phone: '0245987411',
        lastname: 'test',
      }];
    jest
      .spyOn(controller, 'findAll')
      .mockImplementation(
        () => new Promise((resolve, reject) => resolve(result)),
      );
  });
});
