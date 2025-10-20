import { Module } from '@nestjs/common';
import { ParticipantsModule } from './participants/participants.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Participant} from "./participants/entities/participant.entity";
import { StartModule } from './start/start.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'),
        entities: [Participant, User],
        autoLoadEntities: true,
        synchronize: false,
        ssl: {
          rejectUnauthorized: false,
        },
      }),
    }),
    ParticipantsModule,
    StartModule,
    AuthModule,
    UserModule],
})
export class AppModule {}
