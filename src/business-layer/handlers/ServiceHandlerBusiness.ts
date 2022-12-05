import { IServiceHandlerBusiness } from "../interfaces/handlers/IServiceHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class ServiceHandlerBusiness extends BaseHandlerBusiness implements IServiceHandlerBusiness {
    
    async EditServiceHandlerStrategy(name: string, imageUrl: string, id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const service = this._businessFactory.Service(name, imageUrl, id);
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

            await this._repositoriesFactory.IServiceRepository.Delete(service.id);
        })
    }
    
    async CreateServiceHandlerStrategy(name: string, imageUrl: string): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const service = this._businessFactory.Service(name, imageUrl);
            await this._repositoriesFactory.IServiceRepository.AddEntity(service);
        })
    }
}