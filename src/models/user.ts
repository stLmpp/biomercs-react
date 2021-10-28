import { BaseModel } from './base';
import { Player } from './player';

export interface User extends BaseModel {
  username: string;
  email: string;
  lastOnline?: Date;
  rememberMe?: boolean;
  admin: boolean;
  token?: string;
  player?: Player;
}
