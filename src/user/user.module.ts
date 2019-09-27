import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}