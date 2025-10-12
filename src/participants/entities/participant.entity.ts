import {TipoParticipanteEnum} from "./tipoParticipante.enum";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:"participants"})
export class Participant {
    @PrimaryGeneratedColumn({type: "int", unsigned: true})
    id: number;
    @Column({type: "varchar", length: 255})
    apellido: string;
    @Column({type: "varchar", length: 255})
    nombre: string;
    @Column({type: "varchar", length: 255})
    email: string;
    @Column({type: "varchar", length: 8, unique: true})
    dni: string;
    @Column({type: "enum", enum: TipoParticipanteEnum})
    tipoParticipante: string;
}
1