import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from './common/middleware/auth.middleware';
import { logger } from './common/middleware/logger.middleware';
import { AllExceptionsFilter } from './filters/allexception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  
  app.useGlobalFilters(new AllExceptionsFilter())
  // var dodyParser = require("body-parser")
 
  app.use(auth)
  await app.listen(3000);
}
bootstrap();
