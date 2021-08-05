import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OpenFoodFactsModule } from './open-food-facts/open-food-facts.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/innovorder', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }),
    MongooseModule.forFeatureAsync([]),
    AuthModule,
    UsersModule,
    OpenFoodFactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
