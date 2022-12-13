import { IService } from "src/business-layer/interfaces/entitys/IService";
import { BaseService } from "../BaseService";
import { IServiceService } from "../interfaces/service/IServiceService";

export class ServiceService extends BaseService implements IServiceService {
    
    async GetAll(): Promise<IService> {
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.GetAllHandlerStrategy();
        return result;
    }
    
    async EditService(name: string, imageUrl: string, active: boolean, id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.EditServiceHandlerStrategy(name, imageUrl, active, id);
    }

    async DeleteService(id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.DeleteServiceHandlerStrategy(id);
    }
    
    async CreateService(name: string, imageUrl: string, active: boolean): Promise<void> {
        
        const strategy = this._handlerBusinessFactory.IServiceHandlerBusiness;
        const result = await strategy.CreateServiceHandlerStrategy(name, imageUrl, active);
    }

}