import { IService } from "../entitys/IService";

export interface IServiceHandlerBusiness {
    CreateServiceHandlerStrategy(name: string, imageUrl: string, active: boolean): Promise<void>;
    EditServiceHandlerStrategy(name: string, imageUrl: string, active: boolean, id: number): Promise<void>;
    DeleteServiceHandlerStrategy(id: number): Promise<void>;
    GetAllHandlerStrategy(): Promise<IService>;
}