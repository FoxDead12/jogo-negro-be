import { IService } from "../interfaces/entitys/IService";

export class Service implements IService {
    
    public id: number;
    public name: string;
    public imageUrl: string;

    constructor(
        name: string,
        imageUrl: string,
        id?: number
    ) {
        this.name = name;
        this.imageUrl = imageUrl;

        if(id) {
            this.id = id
        }
    }
}