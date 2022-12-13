import { IText } from "../interfaces/entitys/IText";
import { ITextHandlerBusiness } from "../interfaces/handlers/ITextHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class TextHandlerBusiness extends BaseHandlerBusiness implements ITextHandlerBusiness {

    async GetAllHandlerStrategy(): Promise<IText[]> {
        let result: IText[];

        const texts = await this._repositoriesFactory.ITextRepository.GetAll();
        result = texts;
        
        return result;
    }

}