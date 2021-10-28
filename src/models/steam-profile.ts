import { BaseModel } from './base';

export type SteamProfile = BaseModel & RawSteamProfile;

export interface RawSteamProfile {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname?: string;
  primaryclanid?: string;
  timecreated?: number;
  personastateflags: number;
  gameextrainfo?: string;
  loccountrycode?: string;
  gameid?: string;
}
