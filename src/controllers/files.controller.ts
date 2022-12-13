import { Controller, Delete, FileTypeValidator, Get, Param, ParseFilePipe, Post, Res, ResponseDecoratorOptions, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { UserGuard } from "src/guards/user.guard";
import { FilesServicePipe } from "src/pipes/FilesServicePipe";
import { DI } from "src/services/DI";


//Aqui vou criar um explorador de ficheiros
@Controller('files')
export class FilesController {
    
    constructor(private readonly DI: DI) {}

    @Post('upload')
    @UseGuards(UserGuard)
    @UseInterceptors(FileInterceptor('image'))
    getFile(@UploadedFile(FilesServicePipe) image: Express.Multer.File) {

    }
    
    @Delete(':name')
    @UseGuards(UserGuard)
    deleteFile(@Param() param) {
        this.DI.servicesFactory.IFilesService.DeleteFile(param.name);
    }

    @Get()
    @UseGuards(UserGuard)
    getCurrentFiles() {
        return this.DI.servicesFactory.IFilesService.GetFiles();
    }

    @Get(':imgpath')
    @UseGuards(UserGuard)
    getImage(@Param() param, @Res() res) {
        
        res.sendFile(param.imgpath, {root: 'uploads'});
    }
}