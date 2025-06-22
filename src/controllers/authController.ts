import { Context } from 'koa';
import { createUser, findUserByEmail } from '../repositories/userRepository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthSchema } from '../validations/authValidation';

export const register = async (ctx: Context) => {
  const { email, password } = ctx.request.body as AuthSchema;
  const existing = await findUserByEmail(email);
  if (existing) {
    ctx.throw(409, 'Email already in use'); // 409 = Conflict
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(email, hashedPassword);
  ctx.body = { message: 'User created', user };
};

export const login = async (ctx: Context) => {
  const { email, password } = ctx.request.body as AuthSchema;
  const user = await findUserByEmail(email);
  if (!user) ctx.throw(401, 'Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) ctx.throw(401, 'Invalid credentials');

  const token = jwt.sign({ id: user.id }, process.env['JWT_SECRET'] ?? 'secret', { expiresIn: '1h' });
  ctx.body = { token };
};
