import { IService } from "../entitys/IService";
import { ISpace } from "../entitys/ISpace";
import { IText } from "../entitys/IText";
import { IUser } from "../entitys/User";
import { IBaseBaseBusinessFactory } from "./IBaseBaseBusinessFactory";

export interface IBusinessFactory extends IBaseBaseBusinessFactory{
    
    Space(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean, id?: number): ISpace;
    Service(name: string, imageUrl: string, active: boolean, id?: number): IService;
    User(name: string, email: string, password: string, idUser: string): IUser;
    Text(title: string, description: string, active: boolean, id?:number): IText;
}