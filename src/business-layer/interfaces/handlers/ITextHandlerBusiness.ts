import { IText } from "../entitys/IText";

export interface ITextHandlerBusiness {
    GetAllHandlerStrategy(): Promise<IText[]>;
    InsertHandlerStrategy(title: string, description: string, active: boolean): Promise<void>;
    EditHandlerStrategy(title: string, description: string, active: boolean, id: number): Promise<void>;
    DeleteHandlerStrategy(id: number): Promise<void>;
    GetActiveHandlerStrategy(): Promise<IText[]>;
}