export function isAnyObject(value: any): value is Record<any, any> {
  return typeof value === 'object';
}

export function isString(value: any): value is string {
  return typeof value === 'string';
}
