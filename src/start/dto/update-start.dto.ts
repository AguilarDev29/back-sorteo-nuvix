import { PartialType } from '@nestjs/mapped-types';
import { CreateStartDto } from './create-start.dto';

export class UpdateStartDto extends PartialType(CreateStartDto) {}
