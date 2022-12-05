import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('Users')
export class DtoUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idUser: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    dateCreated: Date;
}