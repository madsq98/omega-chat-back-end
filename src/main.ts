import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*', allowedHeaders: '*' },
  });

  const config = new DocumentBuilder()
    .setTitle('OmegaChat API')
    .setDescription('The OmegaChat API description')
    .setVersion('0.01a')
    .addTag('chat')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
