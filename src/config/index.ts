import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL || '',
  sessionKey: process.env.SESSION_KEY || 'koa_secret'
};