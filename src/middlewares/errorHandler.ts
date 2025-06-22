import { Context, Next } from 'koa';

const errorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = { error: err.message || 'Internal Server Error' };
    ctx.app.emit('error', err, ctx);
  }
};

export default errorHandler;
