import { AUTH_TOKEN } from '../tokens/auth';
import { User } from '../models/user';
import { AuthCredentials } from '../models/auth';
import { HttpClient } from './http-client';

export class AuthService {
  constructor(private http: HttpClient) {}

  endPoint = 'auth';

  private _updateLocalStorage(token: string | undefined): void {
    localStorage.setItem(AUTH_TOKEN, token ?? '');
  }

  login = async (dto: AuthCredentials): Promise<User> => {
    const user = await this.http.post<User>(`${this.endPoint}/login`, dto);
    this._updateLocalStorage(user.token);
    return user;
  };

  autoLogin = async (): Promise<User> => {
    const user = await this.http.post<User>(`${this.endPoint}/auto-login`);
    this._updateLocalStorage(user?.token || '');
    return user;
  };
}
