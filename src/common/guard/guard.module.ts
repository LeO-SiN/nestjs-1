import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthenticationGuard } from "src/common/guard/authentication.guard";

@Module({     
    imports:[JwtModule.register({
        global: true,
        secret: '123456',
        signOptions: { expiresIn: '600s' },
      }),],   
    providers:[AuthenticationGuard, JwtService],
    exports:[AuthenticationGuard, JwtService]
})
export class GuardModule{}