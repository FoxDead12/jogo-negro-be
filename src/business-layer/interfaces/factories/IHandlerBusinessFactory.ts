import { IServiceHandlerBusiness } from "../handlers/IServiceHandlerBusiness";
import { ISpaceHandlerBusiness } from "../handlers/ISpaceHandlerBusiness";
import { ITextHandlerBusiness } from "../handlers/ITextHandlerBusiness";
import { IUserHandlerBusiness } from "../handlers/IUserHandlerBusiness";

export interface IHandlerBusinessFactory {
    
    IUserHandlerBusiness: IUserHandlerBusiness;
    ISpaceHandlerBusiness: ISpaceHandlerBusiness;
    IServiceHandlerBusiness: IServiceHandlerBusiness;
    ITextHandlerBusiness: ITextHandlerBusiness;
}