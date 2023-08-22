export function formatParam(param: string | Array<string>): string {
  return typeof param === 'string' ? param : param.join('/')
}
