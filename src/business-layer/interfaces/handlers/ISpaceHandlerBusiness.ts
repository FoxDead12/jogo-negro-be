import { ISpace } from "../entitys/ISpace";

export interface ISpaceHandlerBusiness {

    CreateSpaceHandlerStrategy(name: string, location: string, imageUrl: string, mapsUrl: string): Promise<void>;
    EditSpaceHandlerStrategy(name: string, location: string, imageUrl: string, mapsUrl: string, id: number): Promise<void>;
    DeleteSpaceHandlerStrategy(id: number): Promise<void>;
    GetAllHandlerStrategy(): Promise<ISpace[]>;
}