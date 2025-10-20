import { Injectable } from '@nestjs/common';
import { ParticipantsService } from '../participants/participants.service';
import { Participant } from '../participants/entities/participant.entity';
import { randomInt } from 'crypto';

@Injectable()
export class StartService {
  constructor(private readonly participantsService: ParticipantsService) {}

  async start() {
    const participantes: Participant[] = await this.participantsService.findAll();

    if (participantes.length === 0) {
      return { message: 'No hay participantes para realizar el sorteo.' };
    }

    const winnerIndex = randomInt(0, participantes.length);

    return participantes[winnerIndex].dni;
  }
}
