import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './modules/auth/guards/jwt.guard';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtGuard(app.get(Reflector)));
  const config = new DocumentBuilder()
    .setTitle('Nest example')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT || 3000, () => {
    console.log(
      ` 🚀 Server running on http://localhost:${process.env.PORT || 3000}`,
    );
  });
}
bootstrap();
