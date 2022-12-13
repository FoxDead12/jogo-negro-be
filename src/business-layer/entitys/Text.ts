import { IText } from "../interfaces/entitys/IText";

export class Text implements IText {
    public _id: number;
    public title: string;
    public description: string;
    public active: boolean;

    constructor(
        title: string,
        description: string,
        active: boolean,
        id?: number
    ) {

       this.description = description;
       this.title = title;
       this.active = active;

        if(id) {
            this._id = id;
        }
    }
}