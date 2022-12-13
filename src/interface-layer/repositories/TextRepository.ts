import { IText } from "src/business-layer/interfaces/entitys/IText";
import { DtoText } from "src/dtos/tables/DtoText";
import { QueryRunner, Repository } from "typeorm";
import { ITextRepository } from "../interfaces/repositories/ITextRepository";

export class TextRepository implements ITextRepository {
    
    constructor(
        private _repository: Repository<DtoText>,
        private _runners: {[key: string]: QueryRunner},
        private _transaction: string
    ) {}

    GetEntity(id: number, source?: IText): Promise<IText> {
        throw new Error("Method not implemented.");
    }

    GetEntityBy(entity: Partial<IText>, source?: IText): Promise<IText> {
        throw new Error("Method not implemented.");
    }

    AddEntity(entity: IText, source?: IText): Promise<void> {
        throw new Error("Method not implemented.");
    }

    AddMany(entity: IText[], source?: IText): Promise<void> {
        throw new Error("Method not implemented.");
    }

    Update(entity: IText, source?: IText): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async GetAll(): Promise<IText[]> {
        const result = await this._repository.find();
        if(result) {
            
            const texts: IText[] = [];
            result.forEach((sp) => {
                const text: IText = {
                   _id: sp.id,
                   description: sp.description,
                   title: sp.title,
                   active: sp.active
                }
                texts.push(text);
            })
            return texts;
        }
        else {
            return null;
        }
    }

}