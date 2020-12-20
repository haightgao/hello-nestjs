import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { typeOrmConfig } from './config/typeorm'
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig as TypeOrmModuleOptions), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
