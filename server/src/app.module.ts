import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentModule } from './modules/document/document.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DocumentModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
