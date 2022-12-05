import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { UserGuard } from "src/guards/user.guard";
import { DI } from "../services/DI";

@Controller('users')
export class UserController {

    constructor(private readonly DI: DI) {}

    @UseGuards(UserGuard)
    @Get()
    GetAll() {
        const service = this.DI.servicesFactory.IUserService;
        return service.GetAll();
    }

    @Post("/login")
    async Login(@Body() req) {

        const service = this.DI.servicesFactory.IUserService;
        const token = await service.Login(req.email, req.password, req.keepSession);
        return {token};
    }

    @UseGuards(UserGuard)
    @Post()
    Create(@Body() req) {
        
        const service = this.DI.servicesFactory.IUserService;
        return service.CreateUser(req.name, req.email, req.password);
    }

    @UseGuards(UserGuard)
    @Post(":idUser")
    Edit(@Body() req, @Param() param) {

        const service = this.DI.servicesFactory.IUserService;
        return service.EditUser(req.name, req.email, param.idUser);
    }

    @Delete(':idUser')
    Delete() {

    }

}