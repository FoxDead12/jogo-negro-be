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

    async GetActive(): Promise<IText[]> {
        const result = await this._repository.find({where: {active: true}});
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
    
    async Delete(id: number): Promise<void> {
        const runner = this._runners[this._transaction];
        await runner.manager.delete(DtoText, id);
    }

    async GetEntity(id: number, source?: IText): Promise<IText> {
        const result = await this._repository.findOneBy({id: id});
        if(result) {

            const space: IText = {
                _id: result.id,
                title: result.title,
                description: result.description,
                active: result.active
            }
            return space;
        }
        else {
            return null;
        } 
    }

    GetEntityBy(entity: Partial<IText>, source?: IText): Promise<IText> {
        throw new Error("Method not implemented.");
    }

    async AddEntity(entity: IText, source?: IText): Promise<void> {
        const dto = {
            id: null,
            title: entity.title,
            description: entity.description,
            active: entity.active
        } as DtoText;

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoText, dto);
    }

    AddMany(entity: IText[], source?: IText): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async Update(entity: IText, source?: IText): Promise<void> {
        const dto = {
            id: entity._id,
            title: entity.title,
            description: entity.description,
            active: entity.active
        } as DtoText;

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoText, dto)
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