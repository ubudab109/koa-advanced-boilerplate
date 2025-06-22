import { Context, Next } from 'koa';
import jwt from 'jsonwebtoken';

const authMiddleware = async (ctx: Context, next: Next) => {
  const authHeader = ctx.headers.authorization;
  if (!authHeader) ctx.throw(401, 'No token provided');

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env['JWT_SECRET'] ?? 'secret');
    ctx.state.user = decoded;
    await next();
  } catch {
    ctx.throw(401, 'Invalid token');
  }
};

export default authMiddleware;
