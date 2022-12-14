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

    @Get("active")
    GetActive() {
        const service = this.DI.servicesFactory.ITextService;
        return service.GetActive();
    }

    @UseGuards(UserGuard)
    @Post()
    Create(@Body() req) {
        
        const service = this.DI.servicesFactory.ITextService;
        return service.Insert(req.title, req.description, req.active);
    }

    @UseGuards(UserGuard)
    @Post("/edit") //Aqui vai receber o id user 
    Edit(@Body() req) {

        const service = this.DI.servicesFactory.ITextService;
        return service.Edit(req.title, req.description, req.active, req._id);
    }

    @UseGuards(UserGuard)
    @Delete(":id") //Aqui vai receber o id user
    Delete(@Param() param) {

        const service = this.DI.servicesFactory.ITextService;
        return service.Delete(param.id);
    }
}