import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { JwtStrategy } from './jwt.strategy';
import  { AuthController } from './auth.controller';
import { UserModule } from 'user/user.module';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
            expiresIn: 3600,
            },
         }),
        UserModule,
    ],
    providers: [AuthService, UserService, JwtStrategy],
    controllers: [AuthController],
  })

export class AuthModule {}