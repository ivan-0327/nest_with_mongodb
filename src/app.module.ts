import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentController } from './document.controller';
import { DocumentService } from './document/document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './Cat/cats.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'),CatsModule],
  controllers: [AppController, DocumentController],
  providers: [AppService, DocumentService],
})
export class AppModule {}
