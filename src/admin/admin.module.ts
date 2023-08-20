import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../database/entities/admin.entity';
import { AuthService } from './auth.service';
@Module({
  imports:[TypeOrmModule.forFeature([Admin])],

  controllers: [AdminController],
  providers: [AdminService,AuthService]
})
export class AdminModule {}
