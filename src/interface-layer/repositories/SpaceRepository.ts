import { ISpace } from "src/business-layer/interfaces/entitys/ISpace";
import { DtoSpace } from "src/dtos/tables/DtoSpace";
import { QueryRunner, Repository } from "typeorm";
import { ISpaceRepository } from "../interfaces/repositories/ISpaceRepository";

export class SpaceRepository implements ISpaceRepository {
    
    constructor(
        private _repository: Repository<DtoSpace>,
        private _runners: {[key: string]: QueryRunner},
        private _transaction: string
    ) {
        
    }
    
    async GetActive(): Promise<ISpace[]> {
        const result = await this._repository.find({where: {active: true}});
        if(result) {
            
            const spaces: ISpace[] = [];
            result.forEach((sp) => {
                const space: ISpace = {
                   _id: sp.id,
                   imageUrl: sp.imageUrl,
                   location: sp.location,
                   mapsUrl: sp.mapsUrl,
                   name: sp.name,
                   active: sp.active
                }
                spaces.push(space);
            })
            return spaces;
        }
        else {
            return null;
        }
    }

    async GetAll(): Promise<ISpace[]> {
        const result = await this._repository.find();
        if(result) {
            
            const spaces: ISpace[] = [];
            result.forEach((sp) => {
                const space: ISpace = {
                   _id: sp.id,
                   imageUrl: sp.imageUrl,
                   location: sp.location,
                   mapsUrl: sp.mapsUrl,
                   name: sp.name,
                   active: sp.active
                }
                spaces.push(space);
            })
            return spaces;
        }
        else {
            return null;
        }
    }

    async Delete(id: number): Promise<void> {
        
        const runner = this._runners[this._transaction];
        await runner.manager.delete(DtoSpace, id);
    }
    
    async GetEntity(id: number, source?: ISpace): Promise<ISpace> {
        
        const result = await this._repository.findOneBy({id: id});
        if(result) {

            const space: ISpace = {
                _id: result.id,
                imageUrl: result.imageUrl,
                location: result.location,
                mapsUrl: result.mapsUrl,
                name: result.name,
                active: result.active
            }
            return space;
        }
        else {
            return null;
        } 
    }

    async GetEntityBy(entity: Partial<ISpace>, source?: ISpace): Promise<ISpace> {
        throw new Error("Method not implemented.");
    }

    async AddEntity(entity: ISpace, source?: ISpace): Promise<void> {
        
        const dto = {
            id: null,
            imageUrl: entity.imageUrl,
            location: entity.location,
            mapsUrl: entity.mapsUrl,
            name: entity.name,
            active: entity.active
        } as DtoSpace;

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoSpace, dto);
    }

    AddMany(entity: ISpace[], source?: ISpace): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async Update(entity: ISpace, source?: ISpace): Promise<void> {
        const dto = {
            id: entity._id,
            imageUrl: entity.imageUrl,
            location: entity.location,
            mapsUrl: entity.mapsUrl,
            name: entity.name,
            active: entity.active
        } as DtoSpace;

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoSpace, dto)
    }


}