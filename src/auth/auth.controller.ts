
import { BadRequestException, Body, Controller, HttpStatus, Param, Patch, Post, Response } from '@nestjs/common';
import  { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

@Controller('api/auth')

export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService ) {}

    @Post('login')
    public async login(@Response() res: any, @Body() body: any): Promise<any> {
        console.log(body)
        if (!(body && body.email && body.password)) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'email and password are required!' });
        }
        const user =  await this.userService.findByEmailAndPassword({...body});
        if (!user) {
            return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
        }
        return res.status(HttpStatus.OK).json(await this.authService.createToken(user.id));
      }
}
