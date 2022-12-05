import { IUser } from "../interfaces/entitys/User";

export class User implements IUser {

    public _idUser: string;
    public name: string
    public email: string
    public password: string

    constructor(
        name: string,
        email: string,
        password: string,
        idUser?: string
    ) {

        this.email = email;
        this.password = password;
        this.name = name;
        
        if(idUser) {
            this._idUser = idUser;
        }
    }

    
}