import { Token } from "src/business-layer/entitys/Token";
import { IToken } from "src/business-layer/interfaces/entitys/IToken";
import { ITokenService } from "../interfaces/token/ITokenService";
var jwt = require('jsonwebtoken');


export class TokenService implements ITokenService {
    
    private _privateKey: string = "HHH";

    EncryptToken(idUser: string, keepSession: boolean): string {
        const token = new Token(idUser, keepSession);
        const tokenJWT = jwt.sign({token}, this._privateKey);
        return tokenJWT;
    }

    DecryptToken(token: string): IToken {
        const tokenData = jwt.verify(token, this._privateKey).token as IToken;
        return tokenData;
    }
}

