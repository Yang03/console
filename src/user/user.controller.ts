import { Controller, Get, Query, UseGuards, Post, Response, Body, HttpStatus} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from './user.entity';


@Controller('api/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('all')
    @UseGuards(AuthGuard())
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('register')
    public async createUser(@Response() res: any, @Body() body: any): Promise<any> {
        const result = await this.userService.create({...body});
        return res.status(HttpStatus.OK).json(result);
    }
}