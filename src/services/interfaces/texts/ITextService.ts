import { IText } from "src/business-layer/interfaces/entitys/IText";

export interface ITextService {
    
    GetAll(): Promise<IText[]>;
    Insert(title: string, description: string, active:boolean): Promise<void>;
    Edit(title: string, description: string, active:boolean, id: number): Promise<void>;
    Delete(id: number): Promise<void>;
    GetActive(): Promise<IText[]>;
}