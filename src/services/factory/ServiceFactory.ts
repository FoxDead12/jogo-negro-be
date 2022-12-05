import { HandlerBusinessFactory } from "src/business-layer/factories/HandlerBusinessFactory";
import { IHandlerBusinessFactory } from "src/business-layer/interfaces/factories/IHandlerBusinessFactory";
import { DataSource } from "typeorm";
import { IServiceFactory } from "../interfaces/factory/IServiceFactory";
import { IServiceService } from "../interfaces/service/IServiceService";
import { ISpaceService } from "../interfaces/space/ISpaceService";
import { ITokenService } from "../interfaces/token/ITokenService";
import { IUserService } from "../interfaces/user/IUserService";
import { ServiceService } from "../service/ServiceService";
import { SpaceService } from "../space/SpaceService";
import { TokenService } from "../token/TokenService";
import { UserService } from "../user/UserService";


export class ServiceFactory implements IServiceFactory {
    
    private _handlerBusinessFactory: IHandlerBusinessFactory;

    constructor(dataSource: DataSource) {
        
        this._handlerBusinessFactory = new HandlerBusinessFactory(dataSource, this);
    }

    get IServiceService(): IServiceService {
        return new ServiceService(this._handlerBusinessFactory, this);
    }

    get ISpaceService(): ISpaceService {
        return new SpaceService(this._handlerBusinessFactory, this);
    }

    get ITokenService(): ITokenService {
        return new TokenService();
    }

    get IUserService (): IUserService {
        return new UserService(this._handlerBusinessFactory, this);
    }


}