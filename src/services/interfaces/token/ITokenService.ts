import { IToken } from "src/business-layer/interfaces/entitys/IToken";

export interface ITokenService {

    EncryptToken(idUser: string, keepSession: boolean): string;
    DecryptToken(token: string): IToken;
}