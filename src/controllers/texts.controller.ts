import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/guards/user.guard";
import { DI } from "../services/DI";

@Controller('texts')
export class TextsController {

    constructor(private readonly DI: DI) {}

    @UseGuards(UserGuard)
    @Get()
    GetAll() {
        const service = this.DI.servicesFactory.ITextService;
        return service.GetAll();
    }

    @UseGuards(UserGuard)
    @Post()
    Create(@Body() req) {
        
        
    }

    @UseGuards(UserGuard)
    @Post("/edit") //Aqui vai receber o id user 
    Edit(@Body() req) {

        
    }

    @UseGuards(UserGuard)
    @Delete(":id") //Aqui vai receber o id user
    Delete(@Param() param) {

        
    }
}