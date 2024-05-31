import { CharacterDto } from './character.dto';
import { InfoDto } from '../common/info.dto';

export interface CharacterResponseDto {
  info: InfoDto;
  results: CharacterDto[];
}
