import { ISpace } from "src/business-layer/interfaces/entitys/ISpace";

export interface ISpaceService {
    
    CreateSpace(name: string, location: string, imageUrl: string, mapsUrl: string): Promise<void>;
    EditSpace(name: string, location: string, imageUrl: string, mapsUrl: string, id: number): Promise<void>;
    DeleteSpace(id: number): Promise<void>;
    GetAll(): Promise<ISpace[]>;
}