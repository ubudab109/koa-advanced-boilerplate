import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import session from 'koa-session';
import router from './routes';
import logger from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';
import { rateLimitMiddleware } from './middlewares/rateLimit';
import config from './config';
import notFoundHandler from './middlewares/notFound';

const app = new Koa();
app.keys = [config.sessionKey];

app.use(cors());
app.use(session(app));
app.use(rateLimitMiddleware);
app.use(bodyParser());
app.use(logger);
app.use(errorHandler);
app.use(notFoundHandler);

app.use(router.routes()).use(router.allowedMethods());

export default app;
