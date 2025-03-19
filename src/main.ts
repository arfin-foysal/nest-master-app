import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { JwtGuard } from './modules/auth/guards/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtGuard(app.get(Reflector)));
  await app.listen(process.env.PORT || 3000, () => {
    console.log(
      ` 🚀 Server running on http://localhost:${process.env.PORT || 3000}`,
    );
  });
}
bootstrap();
