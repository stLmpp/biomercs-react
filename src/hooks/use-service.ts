import { Class } from 'type-fest';
import { HttpClient } from '../services/http-client';
import { useHttpClient } from './use-http-client';

const map = new Map<Class, any>();

export function useService<T>(type: Class<T, [HttpClient]>): T {
  if (map.has(type)) {
    return map.get(type);
  }
  return map.set(type, new type(useHttpClient())).get(type);
}
