import { IText } from "../entitys/IText";

export interface ITextHandlerBusiness {
    GetAllHandlerStrategy(): Promise<IText[]>;

}