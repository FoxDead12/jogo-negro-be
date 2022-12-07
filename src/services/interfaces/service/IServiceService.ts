export interface IServiceService {
    
    CreateService(name: string, imageUrl: string, active: boolean): Promise<void>;
    EditService(name: string, imageUrl: string, active: boolean, id: number): Promise<void>;
    DeleteService(id: number): Promise<void>;
}