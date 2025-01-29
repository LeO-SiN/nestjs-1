import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./database/postgres.config";
import { Middleware2 } from "./common/middleware/middleware2";
import { Middleware1 } from "./common/middleware/middleware1";
import { AuthenticationGuard } from "./common/guard/authentication.guard";
import { GuardModule } from "./common/guard/guard.module";

@Module({
    imports:[TypeOrmModule.forRoot(databaseConfig),EmployeeModule]
})

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        // .apply(Middleware1)
        // .forRoutes("*")
        // .apply(Middleware2)
        // .forRoutes({path:'employee',method: RequestMethod.GET})

    }
}