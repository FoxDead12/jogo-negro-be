import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/guards/user.guard";
import { DI } from "src/services/DI";

@Controller("services")
export class ServiceController {

    constructor(private readonly DI: DI) {}
    
    @Get()
    GetAll() {
        const service = this.DI.servicesFactory.IServiceService;
        return service.GetAll();
    }

    @Get("active")
    GetActive() {
        const service = this.DI.servicesFactory.IServiceService;
        return service.GetActive();
    }

    @UseGuards(UserGuard)
    @Post()
    Create(@Body() req) {

        const service = this.DI.servicesFactory.IServiceService;
        return service.CreateService(req.name, req.imageUrl, req.active);
    }

    @UseGuards(UserGuard)
    @Post("/edit") //Aqui vai receber o id user 
    Edit(@Body() req) {

        const service = this.DI.servicesFactory.IServiceService;
        return service.EditService(req.name, req.imageUrl, req.active, req.id);
    }
    
    @UseGuards(UserGuard)
    @Delete(":id") //Aqui vai receber o id user
    Delete(@Param() param) {

        const service = this.DI.servicesFactory.IServiceService;
        return service.DeleteService(param.id);
    }
}