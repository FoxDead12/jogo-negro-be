import { IUser } from "../entitys/User";

export interface IUserHandlerBusiness {

    CreateUserHandlerStrategy(name: string, email: string, password: string): Promise<string>;
    LoginHandlerStrategy(email: string, password: string, keepSession: boolean): Promise<string>;
    UserExistHandlerStrategy(userId: string): Promise<boolean>;
    GetAllHandlerStrategy(): Promise<IUser[]>;
    EditUserHandlerStrategy(name: string, email: string, idUser: string): Promise<void>;
}