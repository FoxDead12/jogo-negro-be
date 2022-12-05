import { IService } from "../entitys/IService";
import { ISpace } from "../entitys/ISpace";
import { IUser } from "../entitys/User";
import { IBaseBaseBusinessFactory } from "./IBaseBaseBusinessFactory";

export interface IBusinessFactory extends IBaseBaseBusinessFactory{
    
    Space(name: string, location: string, imageUrl: string, mapsUrl: string, id?: number): ISpace;
    Service(name: string, imageUrl: string, id?: number): IService;
    User(name: string, email: string, password: string, idUser: string): IUser;
}