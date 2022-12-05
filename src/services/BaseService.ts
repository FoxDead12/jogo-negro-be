import { IHandlerBusinessFactory } from "src/business-layer/interfaces/factories/IHandlerBusinessFactory";
import { IServiceFactory } from "./interfaces/factory/IServiceFactory";

export abstract class BaseService {

    constructor(
        public _handlerBusinessFactory: IHandlerBusinessFactory,
        public _serviceFactory: IServiceFactory
    ){}
}