import * as path from 'path';
import * as sharp from 'sharp';
import { ArgumentMetadata, Injectable, NotAcceptableException, PipeTransform, UnsupportedMediaTypeException } from "@nestjs/common";

@Injectable()
export class FilesServicePipe implements PipeTransform<Express.Multer.File, Promise<string>> {
    
    async transform(image: Express.Multer.File, metadata: ArgumentMetadata): Promise<string> {

        const validTypes = ["png", "jpg", "jpeg"];
        const typeImage = image.mimetype.split("/")[1];

        console.log(image)

        if(!validTypes.includes(typeImage)) {
            throw new NotAcceptableException();
        }
        
        const originalName = path.parse(image.originalname).name;
        const fileName = Date.now() + '-' + originalName + '.webp';

        await sharp(image.buffer)
        .resize(800)
        .webp({ effort: 3 })
        .toFile(path.join('uploads', fileName));

        return fileName;
    } 
}