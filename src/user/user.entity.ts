import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "kk_user"})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    company: string;

    @Column()
    mobile: string;

    @Column()
    companyType: number
}