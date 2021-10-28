import { BaseModel } from './base';
import { SteamProfile } from './steam-profile';
import { Region } from './region';

export interface Player extends BaseModel {
  personaName: string;
  title?: string;
  aboutMe?: string;
  idUser?: number;
  idSteamProfile?: number;
  steamProfile?: SteamProfile;
  noUser: boolean;
  idRegion: number;
  region?: Region;
}
