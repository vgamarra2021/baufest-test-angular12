import { LocationDto } from '../location/location.dto';
import { OriginDto } from './origin.dto';

export interface CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginDto;
  location: LocationDto;
  image: string;
  episode: string[];
  url: string;
  created: string;
  episodeName?: string;
}
