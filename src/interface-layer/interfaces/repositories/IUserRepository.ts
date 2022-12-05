import { IUser } from "src/business-layer/interfaces/entitys/User";
import { DtoUser } from "src/dtos/tables/DtoUser";
import { IRepositoryBase } from "./IRepositoryBase";

export interface IUserRepository extends IRepositoryBase<IUser> {

    CreateUser(email: string, password: string, name: string): Promise<string>;
    Login(email: string, password: string): Promise<string>;
    GetUserByUserId(userId: string): Promise<IUser>;
    GetAll(): Promise<IUser[]>;
}