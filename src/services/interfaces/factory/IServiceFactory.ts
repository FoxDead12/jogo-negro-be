import { IServiceService } from "../service/IServiceService";
import { ISpaceService } from "../space/ISpaceService";
import { ITokenService } from "../token/ITokenService";
import { IUserService } from "../user/IUserService";

export interface IServiceFactory {
    
    ITokenService: ITokenService;
    IUserService: IUserService;
    ISpaceService: ISpaceService;
    IServiceService: IServiceService
}