import { IText } from "src/business-layer/interfaces/entitys/IText";
import { IRepositoryBase } from "./IRepositoryBase";

export interface ITextRepository extends IRepositoryBase<IText> {
    GetAll(): Promise<IText[]>;
    Delete(id: number): Promise<void>;
    GetActive(): Promise<IText[]>;

}