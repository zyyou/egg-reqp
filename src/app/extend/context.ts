import { Context } from 'egg';

function escapeValue(ctx: Context, params: any, key: string) {
  // ctx.logger.warn('params', params, 'key', key);
  if (!params || !params[key]) {
    return undefined;
  }
  return ctx.helper.escape(params[key]);
}

export default {
  get reqp(this: Context): any {
    return {
      body: new Proxy(this, {
        get: (ctx, key: string) => {
          return escapeValue(ctx, ctx.request.body, key);
        },
      }),
      query: new Proxy(this, {
        get: (ctx, key: string) => {
          return escapeValue(ctx, ctx.query, key);
        },
      }),
      params: new Proxy(this, {
        get: (ctx, key: string) => {
          return escapeValue(ctx, ctx.params, key);
        },
      }),
    };
  },
};
