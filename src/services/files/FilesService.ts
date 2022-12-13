import { IFilesService } from "../interfaces/files/IFilesService";
import * as fs from 'fs';
import * as sharp from 'sharp';

export class FilesService implements IFilesService {
    
    async GetFiles(): Promise<any> {
        const filesName: string[] = [];
        fs.readdirSync('./uploads/').forEach(file => {
            
            filesName.push(file);
        });
        return {
            files: filesName
        };
    }
    
    async DeleteFile(fileName: string): Promise<void> {

        fs.unlink('./uploads/' + fileName, (err) => {

            if(err) {
                throw new Error(err.message);
            }
        })
    }    
}