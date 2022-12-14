import { IText } from "../interfaces/entitys/IText";
import { ITextHandlerBusiness } from "../interfaces/handlers/ITextHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class TextHandlerBusiness extends BaseHandlerBusiness implements ITextHandlerBusiness {
    
    async GetActiveHandlerStrategy(): Promise<IText[]> {
        let result: IText[];

        const spaces = await this._repositoriesFactory.ITextRepository.GetActive();
        result = spaces;

        return result;
    }
    
    async DeleteHandlerStrategy(id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            const text = await this._repositoriesFactory.ITextRepository.GetEntity(id);
            if(!text) {
                throw new Error("TEXT DOESNT EXIST!");
            }
            
            await this._repositoriesFactory.ITextRepository.Delete(text._id);
        })
    }
    
    async EditHandlerStrategy(title: string, description: string, active: boolean, id: number): Promise<void> {
        await this.BaseHandler(async (transaction) => {

            const text = this._businessFactory.Text(title, description, active, id);
            const textExist = await this._repositoriesFactory.ITextRepository.GetEntity(id);
            if(!textExist) {
                throw new Error("TEXT DOESNT EXIST!");
            }

            await this._repositoriesFactory.ITextRepository.Update(text);
        })
    }
    
    async InsertHandlerStrategy(title: string, description: string, active: boolean): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const text = this._businessFactory.Text(title, description, active);
            await this._repositoriesFactory.ITextRepository.AddEntity(text);
        });
    }

    async GetAllHandlerStrategy(): Promise<IText[]> {
        let result: IText[];

        const texts = await this._repositoriesFactory.ITextRepository.GetAll();
        result = texts;
        
        return result;
    }

}