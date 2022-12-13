import { DtoService } from "src/dtos/tables/DtoService";
import { DtoSpace } from "src/dtos/tables/DtoSpace";
import { DtoText } from "src/dtos/tables/DtoText";
import { DtoUser } from "src/dtos/tables/DtoUser";
import { IRepositoriesFactory } from "../interfaces/factories/IRepositoriesFactory";
import { IServiceRepository } from "../interfaces/repositories/IServiceRepository";
import { ISpaceRepository } from "../interfaces/repositories/ISpaceRepository";
import { ITextRepository } from "../interfaces/repositories/ITextRepository";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";
import { ServiceRepository } from "../repositories/ServiceRepository";
import { SpaceRepository } from "../repositories/SpaceRepository";
import { TextRepository } from "../repositories/TextRepository";
import { UserRepository } from "../repositories/UserRepository";
import { BaseRepositoriesFactory } from "./BaseRepositoriesFactory";

export class RepositoriesFactory extends BaseRepositoriesFactory implements IRepositoriesFactory {
    
    get ITextRepository(): ITextRepository {
        return new TextRepository(this._dataSource.getRepository(DtoText), this._runners, this._transaction);
    }
    
    get IServiceRepository(): IServiceRepository {
        return new ServiceRepository(this._dataSource.getRepository(DtoService), this._runners, this._transaction);
    }
    
    get ISpaceRepository(): ISpaceRepository {
        return new SpaceRepository(this._dataSource.getRepository(DtoSpace), this._runners, this._transaction)
    }
    
    get IUserRepository(): IUserRepository {
        return new UserRepository(this._dataSource.getRepository(DtoUser),this._runners, this._transaction);
    }

}