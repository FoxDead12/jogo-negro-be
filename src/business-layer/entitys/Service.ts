import { IService } from "../interfaces/entitys/IService";

export class Service implements IService {
    
    public _id: number;
    public name: string;
    public imageUrl: string;
    public active: boolean;

    constructor(
        name: string,
        imageUrl: string,
        active: boolean,
        id?: number
    ) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.active = active;

        if(id) {
            this._id = id
        }
    }
}