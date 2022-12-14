import { IService } from "../interfaces/entitys/IService";
import { IServiceHandlerBusiness } from "../interfaces/handlers/IServiceHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class ServiceHandlerBusiness extends BaseHandlerBusiness implements IServiceHandlerBusiness {
    
    async GetActiveHandlerStrategy(): Promise<IService[]> {
        let result: IService[];

        const spaces = await this._repositoriesFactory.IServiceRepository.GetActive();
        result = spaces;

        return result;
    }
    
    async GetAllHandlerStrategy(): Promise<IService[]> {
        let result: IService[] ;

        const services = await this._repositoriesFactory.IServiceRepository.GetAll();
        result = services;
        
        return result;
    }
    
    async EditServiceHandlerStrategy(name: string, imageUrl: string, active: boolean, id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const service = this._businessFactory.Service(name, imageUrl, active, id);
            const serviceExist = await this._repositoriesFactory.IServiceRepository.GetEntity(id);
            if(!serviceExist) {
                throw new Error("SERVICE DOESNT EXIST!")
            }

            await this._repositoriesFactory.IServiceRepository.Update(service);
        })
    }

    async DeleteServiceHandlerStrategy(id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const service = await this._repositoriesFactory.IServiceRepository.GetEntity(id);
            if(!service) {
                throw new Error("SERVICE DOESNT EXIST!")
            }

            await this._repositoriesFactory.IServiceRepository.Delete(service._id);
        })
    }
    
    async CreateServiceHandlerStrategy(name: string, imageUrl: string, active: boolean): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const service = this._businessFactory.Service(name, imageUrl, active);
            await this._repositoriesFactory.IServiceRepository.AddEntity(service);
        })
    }
}