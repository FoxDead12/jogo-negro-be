import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Spaces')
export class DtoSpace {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    imageUrl: string;

    @Column()
    mapsUrl: string;

    @Column({default: false})
    active: boolean;
}