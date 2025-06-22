import { config } from 'dotenv';
import { execSync } from 'child_process';

// ✅ Force load .env.test
config({ path: '.env.test' });

if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL is not set. Did you load .env.test?');
}

console.log('Running Prisma Migrate for test....');
console.log('Current ENV:', process.env.NODE_ENV);
console.log('DB URL:', process.env.DATABASE_URL);

execSync('npx prisma migrate deploy --schema=prisma/schema.prisma', {
  stdio: 'inherit',
  env: {
    ...process.env,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});