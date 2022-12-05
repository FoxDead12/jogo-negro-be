import { IServiceRepository } from "../repositories/IServiceRepository";
import { ISpaceRepository } from "../repositories/ISpaceRepository";
import { IUserRepository } from "../repositories/IUserRepository";
import { IBaseRepositoriesFactory } from "./IBaseRepositoriesFactory";

export interface IRepositoriesFactory extends IBaseRepositoriesFactory {

    IUserRepository: IUserRepository;    
    ISpaceRepository: ISpaceRepository;
    IServiceRepository: IServiceRepository;
}