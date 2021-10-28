import { httpClient, HttpClient } from '../services/http-client';

export function useHttpClient(): HttpClient {
  return httpClient;
}
