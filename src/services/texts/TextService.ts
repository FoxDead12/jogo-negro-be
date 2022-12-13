import { IText } from "src/business-layer/interfaces/entitys/IText";
import { BaseService } from "../BaseService";
import { ITextService } from "../interfaces/texts/ITextService";

export class TextService extends BaseService implements ITextService {
    
    async GetAll(): Promise<IText[]> {
        const strategy = this._handlerBusinessFactory.ITextHandlerBusiness;
        const result = await strategy.GetAllHandlerStrategy();
        return result;
    }
    
}