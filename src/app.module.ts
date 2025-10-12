import { Module } from '@nestjs/common';
import { ParticipantsModule } from './participants/participants.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Participant} from "./participants/entities/participant.entity";
import { StartModule } from './start/start.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';


@Module({
  imports: [ParticipantsModule,
  TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "42664539",
    entities: [Participant, User],
    database: "sorteo",
    autoLoadEntities: true,
    synchronize: true,
  }),
  StartModule,
  AuthModule,
  UserModule],
})
export class AppModule {}
