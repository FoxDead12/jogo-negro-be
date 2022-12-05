import { Service } from "../entitys/Service";
import { Space } from "../entitys/Space";
import { User } from "../entitys/User";
import { IService } from "../interfaces/entitys/IService";
import { ISpace } from "../interfaces/entitys/ISpace";
import { IUser } from "../interfaces/entitys/User";
import { IBusinessFactory } from "../interfaces/factories/IBusinessFactory";
import { BaseBusinessFactory } from "./BaseBusinessFactory";

export class BusinessFactory extends BaseBusinessFactory implements IBusinessFactory {
    
    User(name: string, email: string, password: string, idUser: string): IUser {
        return new User(name, email, password, idUser);
    }

    Service(name: string, imageUrl: string, id?: number): IService {
        return new Service(name, imageUrl, id)
    }
    
    Space(name: string, location: string, imageUrl: string, mapsUrl: string, id?: number): ISpace {
        return new Space(name, location, imageUrl, mapsUrl, id);
    }
}