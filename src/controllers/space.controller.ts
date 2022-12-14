import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/guards/user.guard";
import { DI } from "../services/DI";

@Controller('spaces')
export class SpaceController {

    constructor(private readonly DI: DI) {}

    @UseGuards(UserGuard)
    @Get()
    GetAll() {
        const service = this.DI.servicesFactory.ISpaceService;
        return  service.GetAll();
    }

    @Get("active")
    GetActive() {
        const service = this.DI.servicesFactory.ISpaceService;
        return service.GetActive();
    }

    @UseGuards(UserGuard)
    @Post()
    Create(@Body() req) {
        
        const service = this.DI.servicesFactory.ISpaceService;
        return service.CreateSpace(req.name, req.location, req.imageUrl, req.mapsUrl, req.active);
    }

    @UseGuards(UserGuard)
    @Post("/edit") //Aqui vai receber o id user 
    Edit(@Body() req) {

        const service = this.DI.servicesFactory.ISpaceService;
        return service.EditSpace(req.name, req.location, req.imageUrl, req.mapsUrl, req.active, req.id);
    }

    @UseGuards(UserGuard)
    @Delete(":id") //Aqui vai receber o id user
    Delete(@Param() param) {

        const service = this.DI.servicesFactory.ISpaceService;
        return service.DeleteSpace(param.id);
    }
}