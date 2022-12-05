import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { ServiceFactory } from "./factory/ServiceFactory";
import { IServiceFactory } from "./interfaces/factory/IServiceFactory";

@Injectable()
export class DI {
    public servicesFactory: IServiceFactory;

    Build(dataSource: DataSource) {

        this.servicesFactory = new ServiceFactory(dataSource);
    }
}