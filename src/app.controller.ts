import { Controller, Get } from "@nestjs/common";

@Controller("/")
export class AppController{
    @Get()
    getInfo()
    {
        return {
            "data":"abc",
            "message":"Success",
            "status":200
        };
    }
}