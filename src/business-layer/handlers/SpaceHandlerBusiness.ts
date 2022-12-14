import { ISpace } from "../interfaces/entitys/ISpace";
import { IText } from "../interfaces/entitys/IText";
import { ISpaceHandlerBusiness } from "../interfaces/handlers/ISpaceHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class SpaceHandlerBusiness extends BaseHandlerBusiness implements ISpaceHandlerBusiness {
    
    async GetActiveHanlderStrategy(): Promise<ISpace[]> {
        let result: ISpace[];

        const spaces = await this._repositoriesFactory.ISpaceRepository.GetActive();
        result = spaces;

        return result;
    }
       
    async GetAllHandlerStrategy(): Promise<ISpace[]> {
        let result: ISpace[];

        const spaces = await this._repositoriesFactory.ISpaceRepository.GetAll();
        result = spaces;
        
        return result;
    }
    
    async DeleteSpaceHandlerStrategy(id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const space = await this._repositoriesFactory.ISpaceRepository.GetEntity(id);
            if(!space) {
                throw new Error("SPACE DOESNT EXIST!")
            }
            
            await this._repositoriesFactory.ISpaceRepository.Delete(space._id);
        })
    }
    
    async EditSpaceHandlerStrategy(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean, id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {

            const space = this._businessFactory.Space(name, location, imageUrl, mapsUrl, active, id);
            const spaceExist = await this._repositoriesFactory.ISpaceRepository.GetEntity(space._id);
            if(!spaceExist) {
                throw new Error("SPACE DOESNT EXIST!")
            }
            
            await this._repositoriesFactory.ISpaceRepository.Update(space);
        })
    }
    
    async CreateSpaceHandlerStrategy(name: string, location: string, imageUrl: string, mapsUrl: string, active: boolean): Promise<void> {
        await this.BaseHandler(async (transaction) => {

            const space = this._businessFactory.Space(name, location, imageUrl, mapsUrl, active);
            await this._repositoriesFactory.ISpaceRepository.AddEntity(space);
        })
    }

}