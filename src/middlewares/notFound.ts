import { Context, Next } from 'koa';

const notFoundHandler = async (ctx: Context, next: Next) => {
  await next();

  if (ctx.status === 404 && ctx.response.body === undefined) {
    ctx.status = 404;
    ctx.body = {
      error: 'Not Found',
      message: `The requested URL ${ctx.method} ${ctx.url} was not found on this server.`,
      statusCode: 404,
    };
  }
};

export default notFoundHandler;
