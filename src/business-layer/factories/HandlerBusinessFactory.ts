import { RepositoriesFactory } from "src/interface-layer/factories/RepositoriesFactory";
import { IRepositoriesFactory } from "src/interface-layer/interfaces/factories/IRepositoriesFactory";
import { IServiceFactory } from "src/services/interfaces/factory/IServiceFactory";
import { DataSource } from "typeorm";
import { ServiceHandlerBusiness } from "../handlers/ServiceHandlerBusiness";
import { SpaceHandlerBusiness } from "../handlers/SpaceHandlerBusiness";
import { UserHandlerBusiness } from "../handlers/UserHandlerBusiness";
import { IBusinessFactory } from "../interfaces/factories/IBusinessFactory";
import { IHandlerBusinessFactory } from "../interfaces/factories/IHandlerBusinessFactory";
import { IServiceHandlerBusiness } from "../interfaces/handlers/IServiceHandlerBusiness";
import { ISpaceHandlerBusiness } from "../interfaces/handlers/ISpaceHandlerBusiness";
import { IUserHandlerBusiness } from "../interfaces/handlers/IUserHandlerBusiness";
import { BusinessFactory } from "./BusinessFactory";

export class HandlerBusinessFactory implements IHandlerBusinessFactory {

    private _businessFactory : IBusinessFactory;
    private _repositoriesFactory : IRepositoriesFactory;
    private _serviceFactory: IServiceFactory;

    constructor(dataSource: DataSource, serviceFactory: IServiceFactory) {

        this._serviceFactory = serviceFactory;
        this._repositoriesFactory = new RepositoriesFactory(dataSource);
        this._businessFactory = new BusinessFactory(this._repositoriesFactory);
    }
    get IServiceHandlerBusiness(): IServiceHandlerBusiness {
        return new ServiceHandlerBusiness(this, this._businessFactory, this._repositoriesFactory, this._serviceFactory);
    }
    
    get ISpaceHandlerBusiness(): ISpaceHandlerBusiness {
        return new SpaceHandlerBusiness(this, this._businessFactory, this._repositoriesFactory, this._serviceFactory);
    }
    
    get IUserHandlerBusiness(): IUserHandlerBusiness {
        return new UserHandlerBusiness(this, this._businessFactory, this._repositoriesFactory, this._serviceFactory);
    }

}
