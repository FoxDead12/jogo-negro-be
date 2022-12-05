import { IUser } from "src/business-layer/interfaces/entitys/User";
import { BaseService } from "../BaseService";
import { IUserService } from "../interfaces/user/IUserService";

export class UserService extends BaseService implements IUserService {
    
    async EditUser(name: string, email: string, idUser: string): Promise<void> {
        
        const strategy = this._handlerBusinessFactory.IUserHandlerBusiness;
        return await strategy.EditUserHandlerStrategy(name, email, idUser);
    }
    
    async GetAll(): Promise<IUser[]> {
        
        const strategy = this._handlerBusinessFactory.IUserHandlerBusiness;
        const result = await strategy.GetAllHandlerStrategy();
        return result;
    }
    
    async UserExist(idUser: string): Promise<boolean> {
        
        const strategy = this._handlerBusinessFactory.IUserHandlerBusiness;
        const result = await strategy.UserExistHandlerStrategy(idUser);
        return result;
    }
    
    async Login(email: string, password: string, keepSession: boolean): Promise<string> {

        const strategy = this._handlerBusinessFactory.IUserHandlerBusiness;
        const result = await strategy.LoginHandlerStrategy(email, password, keepSession);
        return result;
    }
    
    async CreateUser(name: string, email: string, password: string): Promise<string> {

        const strategy = this._handlerBusinessFactory.IUserHandlerBusiness;
        const result = await strategy.CreateUserHandlerStrategy(name, email, password);
        return result;
    }

}