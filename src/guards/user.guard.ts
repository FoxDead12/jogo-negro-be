import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { DI } from "src/services/DI";

@Injectable()
export class UserGuard implements CanActivate {
    
    constructor(private readonly DI: DI) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest() as Request;
        const token = request.cookies['token'];

        try {
            if(token) {
                
                const tokenObj = await this.DI.servicesFactory.ITokenService.DecryptToken(token);
                if(tokenObj) {

                    const today = new Date();
                    const dateToken = new Date(tokenObj.dateCreader);
                    
                    //Caso KeepSession TRUE 30 dias, caso FALSE 1 dia
                    const restTime = Math.abs(today.getTime() - dateToken.getTime());
                    const diffDays = Math.ceil(restTime / (1000 * 3600 * 24))
                    
                    if(tokenObj.keepSession == true) {
                        if(diffDays > 30) {
                            throw new UnauthorizedException();
                        }
                    }

                    if(tokenObj.keepSession == false) {
                        if(diffDays > 1) {
                            throw new UnauthorizedException();
                        }
                    }

                    const user = await this.DI.servicesFactory.IUserService.UserExist(tokenObj.idUser);   
                    if(user) {
                        return true;
                    }
                }
            }
        }
        catch(error: any) {

            throw new UnauthorizedException();
        }
        
        throw new UnauthorizedException(); 
        
    }

}