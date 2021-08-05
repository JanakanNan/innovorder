import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('innovorder');
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Innovorder API')
    .setDescription('Innovorder API description')
    .setVersion('1.0')
    .addTag('Innovorder')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
}
bootstrap();
