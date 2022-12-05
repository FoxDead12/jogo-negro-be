import { IUser } from "../interfaces/entitys/User";
import { IUserHandlerBusiness } from "../interfaces/handlers/IUserHandlerBusiness";
import { BaseHandlerBusiness } from "./BaseHandlerBusiness";

export class UserHandlerBusiness extends BaseHandlerBusiness implements IUserHandlerBusiness {
    
    async EditUserHandlerStrategy(name: string, email: string, idUser: string): Promise<void> {
        await this.BaseHandler(async (transaction) => {
            
            const user = this._businessFactory.User(name, email, '', idUser);
            const userExist = await this._repositoriesFactory.IUserRepository.GetUserByUserId(user._idUser);
            if(!userExist) {
                throw new Error("USER DOESNT EXIST!");
            }

            await this._repositoriesFactory.IUserRepository.Update(user);
        })
    }
    
    async GetAllHandlerStrategy(): Promise<IUser[]> {
        let result: IUser[];

        const users = await this._repositoriesFactory.IUserRepository.GetAll();
        result = users;

        return result;
    }
    
    async UserExistHandlerStrategy(userId: string): Promise<boolean> {
        let result: boolean;

        const user = await this._repositoriesFactory.IUserRepository.GetUserByUserId(userId);
                
        if(user) {
            result = true;
        }
        else {
            result = false;
            throw new Error("USER DOESNT EXIST!");
        }

        return result;
    }
    
    async LoginHandlerStrategy(email: string, password: string, keepSession: boolean): Promise<string> {
        let result: string;
        
        const idUser = await this._repositoriesFactory.IUserRepository.Login(email, password);
        if(!idUser) {
            throw new Error("WRONG CREDENTIALS!");
        }
        
        const token = this._serviceFactory.ITokenService.EncryptToken(idUser, keepSession);
        result = token;

        return result;
    }
    
    async CreateUserHandlerStrategy(name: string, email: string, password: string): Promise<string> {
        let result: string;

        await this.BaseHandler(async (transaction) => {
            
            //Aqui temos de verificar se existe um utilizador com este email?
            const user = await this._repositoriesFactory.IUserRepository.GetEntityBy({email});
            if(user) {
                throw new Error("USER ALREADY EXIST!");
            }

            //É possivel criar este utilizador
            const idUser = await this._repositoriesFactory.IUserRepository.CreateUser(email, password, name);
            result = idUser;
        })

        return result;
    }


}