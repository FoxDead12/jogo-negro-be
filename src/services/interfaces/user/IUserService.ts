import { IUser } from "src/business-layer/interfaces/entitys/User";

export interface IUserService {

    CreateUser(name: string, email: string, password: string): Promise<string>;
    Login(email: string, password: string, keepSession: boolean): Promise<string>;
    UserExist(idUser: string): Promise<boolean>;
    GetAll(): Promise<IUser[]>;
    EditUser(name: string, email: string, idUser: string): Promise<void>;
}