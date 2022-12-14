import { ISpace } from "src/business-layer/interfaces/entitys/ISpace";
import { IText } from "src/business-layer/interfaces/entitys/IText";
import { BaseService } from "../BaseService";
import { ISpaceService } from "../interfaces/space/ISpaceService";

export class SpaceService extends BaseService implements ISpaceService {
    
    async GetActive(): Promise<ISpace[]> {
        const strategy = this._handlerBusinessFactory.ISpaceHandlerBusiness;
        const result = await strategy.GetActiveHanlderStrategy();
        return result;
    }
    
    async GetAll(): Promise<ISpace[]> {
        
        const strategy = this._handlerBusinessFactory.ISpaceHandlerBusiness;
        const result = await strategy.GetAllHandlerStrategy();
        return result;
    }
    
    async DeleteSpace(id: number): Promise<void> {

        const strategy = this._handlerBusinessFactory.ISpaceHandlerBusiness;
        await strategy.DeleteSpaceHandlerStrategy(id);
    }
    
    async EditSpace(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean, id: number): Promise<void> {
        
        const strategy = this._handlerBusinessFactory.ISpaceHandlerBusiness;
        await strategy.EditSpaceHandlerStrategy(name, location, imageUrl, mapsUrl, active, id);
    }
    
    async CreateSpace(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean): Promise<void> {
        
        const strategy = this._handlerBusinessFactory.ISpaceHandlerBusiness;
        await strategy.CreateSpaceHandlerStrategy(name, location, imageUrl, mapsUrl, active);
    }
}