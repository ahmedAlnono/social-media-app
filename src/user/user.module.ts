import { Bost } from './entities/bost.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, Bost])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
