import { NestFactory } from '@nestjs/core';
import { BookDirectoryModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(BookDirectoryModule);

  const config = new DocumentBuilder()
    .setTitle('book-directory')
    .setDescription('book management in library')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  await SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
