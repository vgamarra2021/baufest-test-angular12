import { CharacterDto } from '../character/character.dto';
import { EpisodeDto } from '../episode/episode.dto';
import { LocationDto } from '../location/location.dto';
import { InfoDto } from './info.dto';

export interface ResponseDto {
  info: InfoDto;
  results: CharacterDto[] | EpisodeDto[] | LocationDto[];
}
