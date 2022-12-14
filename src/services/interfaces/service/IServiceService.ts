import { IService } from "src/business-layer/interfaces/entitys/IService";

export interface IServiceService {
    
    CreateService(name: string, imageUrl: string, active: boolean): Promise<void>;
    EditService(name: string, imageUrl: string, active: boolean, id: number): Promise<void>;
    DeleteService(id: number): Promise<void>;
    GetAll(): Promise<IService[]>;
    GetActive(): Promise<IService[]>;
}