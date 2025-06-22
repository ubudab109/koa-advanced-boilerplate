import rateLimit from 'koa-ratelimit';
import Redis from 'ioredis';

const db = new Redis();

export const rateLimitMiddleware = rateLimit({
  driver: 'redis',
  db,
  duration: 60000,
  errorMessage: 'Too many requests, slow down.',
  id: (ctx) => ctx.ip,
  max: 100,
});
