import { IService } from "src/business-layer/interfaces/entitys/IService";
import { DtoService } from "src/dtos/tables/DtoService";
import { QueryRunner, Repository } from "typeorm";
import { IServiceRepository } from "../interfaces/repositories/IServiceRepository";

export class ServiceRepository implements IServiceRepository {

    constructor(
        private _repository: Repository<DtoService>,
        private _runners: {[key: string]: QueryRunner},
        private _transaction: string
    ) {
        
    }
    
    async Delete(id: number): Promise<void> {
        const runner = this._runners[this._transaction];
        await runner.manager.delete(DtoService, id);
    }

    async GetEntity(id: number, source?: IService): Promise<IService> {
        
        const result = await this._repository.findOneBy({id: id});
        if(result) {

            const service: IService = {
                id: result.id,
                imageUrl: result.imageUrl,
                name: result.name
            }

            return service;
        }
        else {
            return null;
        } 
    }

    GetEntityBy(entity: Partial<IService>, source?: IService): Promise<IService> {
        throw new Error("Method not implemented.");
    }

    async AddEntity(entity: IService, source?: IService): Promise<void> {
        const dto = {
            id: null,
            imageUrl: entity.imageUrl,
            name: entity.name
        } as DtoService

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoService, dto);
    }

    AddMany(entity: IService[], source?: IService): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async Update(entity: IService, source?: IService): Promise<void> {
        const dto = {
            id: entity.id,
            imageUrl: entity.imageUrl,
            name: entity.name
        } as DtoService

        const runner = this._runners[this._transaction];
        await runner.manager.save(DtoService, dto);
    }
}