import { Context } from 'egg';

export default {
  get reqp(this: Context): any {
    return {
      body: new Proxy(this, {
        get: (ctx, key) => {
          return ctx.helper.escape(ctx.request.body[key]);
        },
      }),
      query: new Proxy(this, {
        get: (ctx, key) => {
          return ctx.helper.escape(ctx.query[key]);
        },
      }),
      params: new Proxy(this, {
        get: (ctx, key) => {
          return ctx.helper.escape(ctx.params[key]);
        },
      }),
    };
  },
};
