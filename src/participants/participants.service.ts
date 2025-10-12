import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Participant} from "./entities/participant.entity";
import {Repository} from "typeorm";

@Injectable()
export class ParticipantsService {

  constructor(@InjectRepository(Participant) private readonly participantRepository: Repository<Participant>) {
  }

  create(createParticipantDto: CreateParticipantDto): Promise<Participant> {
    const participant: Participant = new Participant();

    participant.apellido = createParticipantDto.apellido;
    participant.nombre = createParticipantDto.nombre;
    participant.email = createParticipantDto.email;
    participant.dni = createParticipantDto.dni;
    participant.tipoParticipante = createParticipantDto.tipoParticipante;

    return this.participantRepository.save(participant);
  }

  findAll() {
    return this.participantRepository.find();
  }

  findOne(id: number) {
    return this.participantRepository.findOneBy({id});
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: number) {
    return this.participantRepository.delete(id);
  }
}
