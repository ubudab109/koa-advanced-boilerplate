import { Context, Next } from 'koa';

const logger = async (ctx: Context, next: Next) => {
  console.log(`--> ${ctx.method} ${ctx.url}`);
  console.log('Request Params:', JSON.stringify(ctx.params, null, 2));
  console.log('Request Query:', JSON.stringify(ctx.query, null, 2));
  console.log('Request Body:', JSON.stringify(ctx.request.body, null, 2));

  await next();

  console.log(`<-- ${ctx.method} ${ctx.url} | Status: ${ctx.status}`);
};
export default logger;
