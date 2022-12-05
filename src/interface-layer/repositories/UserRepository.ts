import { User } from "src/business-layer/entitys/User";
import { IUser } from "src/business-layer/interfaces/entitys/User";
import { DtoUser } from "src/dtos/tables/DtoUser";
import { QueryRunner, Repository } from "typeorm";
import { IUserRepository } from "../interfaces/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
    
    constructor(
        private _repository: Repository<DtoUser>,
        private _runners: {[key: string]: QueryRunner},
        private _transaction: string
    ) {
        
    }
    
    async GetAll(): Promise<IUser[]> {
        const result = await this._repository.find();
        if(result) {
            
            const users: IUser[] = [];
            result.forEach((us) => {
                const user: IUser = {
                    _idUser: us.idUser,
                    email: us.email,
                    name: us.name,
                    password: us.password
                }
                users.push(user);
            })
            return users;
        }
        else {
            return null;
        }
    }

    async GetUserByUserId(userId: string): Promise<IUser> {
        const result = await this._repository.findOneBy({idUser: userId});
        
        if(result) {
            const user = new User(result.name, result.email, result.password, result.idUser);
            return user;
        }
        else {

            return null;
        }
    }

    async Login(email: string, password: string): Promise<string> {

        const result = await this._repository.query("CALL pr_login(?,?)", [email, password]);
        const value = result[0][0].user_id;
        if(value == 0) {
            return null;
        }
        else {
            return value;
        }
    }

    async CreateUser(email: string, password: string, name: string): Promise<string> {
        
        const result = await this._runners[this._transaction].manager.query("CALL pr_create_user(?,?,?)", [email, password, name]);
        return result[0][0].user_id;
    }

    GetEntity(id: number, source?: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    
    async GetEntityBy(entity: Partial<IUser>, source?: IUser): Promise<IUser> {
        
        const result = await this._repository.findOneBy(entity);
        if(result) {
            const user: IUser = {
                _idUser: result.idUser,
                email: result.email,
                name: result.name,
                password: result.password
            }
            return user;
        } else {
            return null;
        }
    }

    AddEntity(entity: IUser, source?: IUser): Promise<void> {
        throw new Error("Method not implemented.");
    }

    AddMany(entity: IUser[], source?: IUser): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async Update(entity: IUser, source?: IUser): Promise<void> {
        const runner = this._runners[this._transaction];
        await runner.manager.update(DtoUser, {idUser: entity._idUser}, {email: entity.email, name: entity.name})
    }
    
    

}