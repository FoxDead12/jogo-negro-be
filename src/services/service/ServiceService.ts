import { BaseService } from "../BaseService";
import { IServiceService } from "../interfaces/service/IServiceService";

export class ServiceService extends BaseService implements IServiceService {
    
    async EditService(name: string, imageUrl: string, id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.EditServiceHandlerStrategy(name, imageUrl, id);
    }

    async DeleteService(id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.DeleteServiceHandlerStrategy(id);
    }
    
    async CreateService(name: string, imageUrl: string): Promise<void> {
        
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.CreateServiceHandlerStrategy(name, imageUrl);
    }

}