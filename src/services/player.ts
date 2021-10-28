import { Player } from '../models/player';
import { HttpClient } from './http-client';

export class PlayerService {
  constructor(private httpClient: HttpClient) {}

  private _endPoint = 'player';

  findIdPlayerByIdUser = (idUser: number): Promise<number> =>
    this.httpClient.get<number>(`${this._endPoint}/user/${idUser}/id`);

  findById = (idPlayer: number): Promise<Player> => this.httpClient.get<Player>(`${this._endPoint}/${idPlayer}`);
}
