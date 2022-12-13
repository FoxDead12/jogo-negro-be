import { IText } from "src/business-layer/interfaces/entitys/IText";

export interface ITextService {
    
    GetAll(): Promise<IText[]>;
}