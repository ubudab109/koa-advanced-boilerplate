import request from 'supertest';
import app from '../src/app';
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();
const server = app.callback(); // Koa needs .callback() for supertest

beforeAll(async () => {
  await prisma.user.deleteMany(); // clear user first
});

describe('Auth Flow', () => {
  const userData = {
    email: 'test@example.com',
    password: 'secret123',
  };

  let token: string;

  it('should register a user', async () => {
    const res = await request(server)
      .post('/api/v1/auth/register')
      .send(userData)
      .expect(200);

    expect(res.body.message).toBe('User created');
    expect(res.body.user.email).toBe(userData.email);
  });

  it('should fail register if email exists', async () => {
    const res = await request(server)
      .post('/api/v1/auth/register')
      .send(userData)
      .expect(409);

    expect(res.body).toHaveProperty('error', 'Email already in use');
  });

  it('should login with correct credentials', async () => {
    const res = await request(server)
      .post('/api/v1/auth/login')
      .send(userData)
      .expect(200);

    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

  it('should reject login with wrong password', async () => {
    await request(server)
      .post('/api/v1/auth/login')
      .send({ ...userData, password: 'wrongpass' })
      .expect(401);
  });

  it('should access protected route with token', async () => {
    const res = await request(server)
      .get('/api/v1/auth/protected')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(res.body.message).toBe('You are authorized!');
  });

  it('should reject protected route without token', async () => {
    await request(server).get('/api/v1/auth/protected').expect(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
