import { Service } from "../entitys/Service";
import { Space } from "../entitys/Space";
import { Text } from "../entitys/Text";
import { User } from "../entitys/User";
import { IService } from "../interfaces/entitys/IService";
import { ISpace } from "../interfaces/entitys/ISpace";
import { IText } from "../interfaces/entitys/IText";
import { IUser } from "../interfaces/entitys/User";
import { IBusinessFactory } from "../interfaces/factories/IBusinessFactory";
import { BaseBusinessFactory } from "./BaseBusinessFactory";

export class BusinessFactory extends BaseBusinessFactory implements IBusinessFactory {
    
    Text(title: string, description: string, active: boolean, id?: number): IText {
        return new Text(title, description, active, id);
    }
    
    User(name: string, email: string, password: string, idUser: string): IUser {
        return new User(name, email, password, idUser);
    }

    Service(name: string, imageUrl: string, active: boolean, id?: number): IService {
        return new Service(name, imageUrl, active, id)
    }
    
    Space(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean, id?: number): ISpace {
        return new Space(name, location, imageUrl, mapsUrl, active, id);
    }
}