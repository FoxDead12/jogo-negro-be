import { IService } from "src/business-layer/interfaces/entitys/IService";
import { IRepositoryBase } from "./IRepositoryBase";

export interface IServiceRepository extends IRepositoryBase<IService> {

    Delete(id: number): Promise<void>;
    GetAll(): Promise<IService[]>;
}