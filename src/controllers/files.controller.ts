import { Controller, Delete, FileTypeValidator, Get, Param, ParseFilePipe, Post, Res, StreamableFile, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream } from "fs";
import { join } from "path";
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
    getFiles(@Res() res) {

        const file = createReadStream(join(process.cwd(), 'uploads/1670359707672-png-transparent-two-checked-flags-racing-flags-auto-racing-racing-flag-miscellaneous-game-flag-png-free-download.webp'));
        const file2 = createReadStream(join(process.cwd(), 'uploads/1670359707672-png-transparent-two-checked-flags-racing-flags-auto-racing-racing-flag-miscellaneous-game-flag-png-free-download.webp'));

        file.pipe(res);
        file2.pipe(res)
    }
}