import { ISpace } from "../interfaces/entitys/ISpace";

export class Space implements ISpace {

    public _id: number = 0;
    public name: string;
    public location: string
    public imageUrl: string
    public mapsUrl: string;

    constructor(
        name: string,
        location: string,
        imageUrl: string,
        mapsUrl: string,
        id?: number
    ) {

       this.name = name;
       this.location = location;
       this.imageUrl = imageUrl;
       this.mapsUrl = mapsUrl; 

        if(id) {
            this._id = id;
        }
    }
}