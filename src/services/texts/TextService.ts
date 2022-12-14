import { IText } from "src/business-layer/interfaces/entitys/IText";
import { BaseService } from "../BaseService";
import { ITextService } from "../interfaces/texts/ITextService";

export class TextService extends BaseService implements ITextService {
    
    async GetActive(): Promise<IText[]> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.GetActiveHandlerStrategy();
        return result;
    }
    
    async Delete(id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.DeleteHandlerStrategy(id);
    }
    
    async Edit(title: string, description: string, active: boolean, id: number): Promise<void> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.EditHandlerStrategy(title, description, active, id);
    }
    
    async Insert(title: string, description: string, active: boolean): Promise<void> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.InsertHandlerStrategy(title, description, active);
    }
    
    async GetAll(): Promise<IText[]> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.GetAllHandlerStrategy();
        return result;
    }
    
}