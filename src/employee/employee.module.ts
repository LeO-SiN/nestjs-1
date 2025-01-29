import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./entity/employee.entity";
import { AuthenticationGuard } from "src/common/guard/authentication.guard";
import { GuardModule } from "src/common/guard/guard.module";


@Module({
    imports:[TypeOrmModule.forFeature([Employee]), GuardModule],
    controllers:[EmployeeController],
    providers:[EmployeeService]
})
export class EmployeeModule{}