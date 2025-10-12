import {TipoParticipanteEnum} from "../entities/tipoParticipante.enum";
import {IsEmail, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class CreateParticipantDto {
    @IsString()
    @IsNotEmpty()
    apellido: string;
    @IsString()
    @IsNotEmpty()
    nombre: string;
    @IsEmail()
    @MaxLength(255)
    @IsNotEmpty()
    email: string;
    @IsString()
    @MinLength(1)
    @MaxLength(8)
    @IsNotEmpty()
    dni: string;
    @IsNotEmpty()
    tipoParticipante: string;
}
