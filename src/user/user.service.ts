import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { comparePassword, genPassword } from '../helper/password';

interface JwtPayload {
    email: string,
    password: string
}

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(params: Object): Promise<User> {
        return this.userRepository.findOne(params);
    }

    async findByEmailAndPassword(payload: JwtPayload): Promise<any> {
        const user = await this.userRepository.findOne({ email: payload.email});
        if(user && user.password && comparePassword(user.password, payload.password)) {
           return user;
        } 
        return null;
    }

    async create(user: User): Promise<any> {
        user.password = genPassword(user.password);
        return await this.userRepository.save(user);
    }
}