export interface IFilesService {

    DeleteFile(fileName: string): Promise<void>;
    GetFiles(): Promise<any>;
}