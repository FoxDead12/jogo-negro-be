import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Services')
export class DtoService {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    imageUrl: string;

    @Column({default: false})
    active: boolean;
}