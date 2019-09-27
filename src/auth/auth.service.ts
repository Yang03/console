
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

interface JwtPayload {
    email: string,
    password: string
}

@Injectable() 
export class AuthService {
    constructor(
        private readonly usesService: UserService,
        private readonly jwtService: JwtService
        ) {}

    async createToken(id) {
        const accessToken = this.jwtService.sign({id});
        return {
            expiresIn: 3600,
            accessToken,
        }
    }

    async validateUser(payload: JwtPayload): Promise<boolean> {
        return await this.usesService.findByEmailAndPassword(payload)
    }

}