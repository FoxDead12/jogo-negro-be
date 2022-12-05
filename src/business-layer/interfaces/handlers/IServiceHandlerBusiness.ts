export interface IServiceHandlerBusiness {
    CreateServiceHandlerStrategy(name: string, imageUrl: string): Promise<void>;
    EditServiceHandlerStrategy(name: string, imageUrl: string, id: number): Promise<void>;
    DeleteServiceHandlerStrategy(id: number): Promise<void>;
}