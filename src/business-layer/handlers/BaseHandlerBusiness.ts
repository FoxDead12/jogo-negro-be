import { IRepositoriesFactory } from "src/interface-layer/interfaces/factories/IRepositoriesFactory";
import { IServiceFactory } from "src/services/interfaces/factory/IServiceFactory";
import { IBusinessFactory } from "../interfaces/factories/IBusinessFactory";
import { IHandlerBusinessFactory } from "../interfaces/factories/IHandlerBusinessFactory";

export abstract class BaseHandlerBusiness {

    
    constructor(
        protected _handlerBusinessFactory : IHandlerBusinessFactory,
        protected _businessFactory : IBusinessFactory,
        protected _repositoriesFactory : IRepositoriesFactory,
        protected _serviceFactory: IServiceFactory
    ) {}
    
    async BaseHandler(logicBlock: (transaction: string) => Promise<void>){

        let cachedError: Error = undefined;
        let transaction: string = undefined;

        try {

            transaction = await this._businessFactory.BeginChanges();
            await logicBlock(transaction);
            await this._businessFactory.SaveChanges(transaction);
        }
        catch(e) {
            if(transaction) {
                await this._businessFactory.RollbackChanges(transaction);
            }
            cachedError = e;   
        }
        finally {
            await this._businessFactory.RealiseChanges(transaction);
        }

        if(cachedError) {
            throw cachedError;
        }
        
    }
}