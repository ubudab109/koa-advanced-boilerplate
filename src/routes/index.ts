import Router from '@koa/router';
import authRoutes from './authRoutes';
import { Context } from 'koa';

const mainRouter = new Router({ prefix: '/api/v1' });

mainRouter.get('/', (ctx: Context) => {
  ctx.body = {
    message: 'Welcome To Koa API',
  };
});

mainRouter.use('/auth', authRoutes.routes(), authRoutes.allowedMethods());

export default mainRouter;