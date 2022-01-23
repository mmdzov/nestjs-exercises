import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('user-system app').build();

  const document = await SwaggerModule.createDocument(app, config);

  await SwaggerModule.setup('api', app, document, {});

  await app.listen(3000);
}
bootstrap();
