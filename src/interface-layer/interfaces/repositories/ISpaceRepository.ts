import { ISpace } from "src/business-layer/interfaces/entitys/ISpace";
import { IRepositoryBase } from "./IRepositoryBase";

export interface ISpaceRepository extends IRepositoryBase<ISpace> {
    
    Delete(id: number): Promise<void>;
    GetAll(): Promise<ISpace[]>;
    GetActive(): Promise<ISpace[]>;
}