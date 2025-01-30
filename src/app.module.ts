import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/postgres.config';
import { Middleware1 } from './common/middleware/middleware1';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { expiresIn: '600s' },
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 2,
      },
    ]),
    TypeOrmModule.forRoot(databaseConfig),
    EmployeeModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
<<<<<<< HEAD
    //consumer.apply(Middleware1).forRoutes('*');
=======
    // consumer.apply(Middleware1).forRoutes('*');
>>>>>>> 6d16d89a57dda5867c39683052404ac0a88dabb5
    // .apply(Middleware2)
    // .forRoutes({path:'employee',method: RequestMethod.GET})
  }
}
