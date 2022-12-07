import { ISpace } from "../interfaces/entitys/ISpace";

export class Space implements ISpace {

    public _id: number = 0;
    public name: string;
    public location: string
    public imageUrl: string
    public mapsUrl: string;
    public active: boolean;

    constructor(
        name: string,
        location: string,
        imageUrl: string,
        mapsUrl: string,
        active: boolean,
        id?: number
    ) {

       this.name = name;
       this.location = location;
       this.imageUrl = imageUrl;
       this.mapsUrl = mapsUrl; 
       this.active = active;

        if(id) {
            this._id = id;
        }
    }
}