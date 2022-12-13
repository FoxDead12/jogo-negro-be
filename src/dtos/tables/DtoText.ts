import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Texts")
export class DtoText {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({default: false})
    active: boolean;
}