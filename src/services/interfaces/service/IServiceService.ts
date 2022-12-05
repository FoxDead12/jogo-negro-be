export interface IServiceService {
    
    CreateService(name: string, imageUrl: string): Promise<void>;
    EditService(name: string, imageUrl: string, id: number): Promise<void>;
    DeleteService(id: number): Promise<void>;
}