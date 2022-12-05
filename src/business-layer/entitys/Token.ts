import { IToken } from "../interfaces/entitys/IToken";

export class Token implements IToken {

    public idUser: string;
    public dateCreader: Date;
    public keepSession: boolean = false;

    constructor(
        idUser: string,
        keepSession: boolean,
    ) {

        this.idUser = idUser;
        this.keepSession = keepSession;
        this.dateCreader = new Date();
    }
   

    
}