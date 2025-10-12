import { Module } from '@nestjs/common';
import { StartService } from './start.service';
import { StartController } from './start.controller';
import { ParticipantsModule } from '../participants/participants.module'; // Importamos el módulo completo

@Module({
  imports: [ParticipantsModule], // Añadimos ParticipantsModule a los imports
  controllers: [StartController],
  providers: [StartService], // Quitamos ParticipantsService de aquí
})
export class StartModule {}
