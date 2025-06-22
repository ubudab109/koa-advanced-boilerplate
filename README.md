# Koa Advanced Boilerplate

![CI](https://github.com/ubudab109/koa-advanced-boilerplate/actions/workflows/test.yml/badge.svg?branch=main)

A fully-featured and scalable Koa.js boilerplate with TypeScript, MySQL, Authentication, Middleware architecture, Rate Limiting, and CI integration.

---

## 🚀 Features

- ⚡️ Koa + TypeScript base setup
- 🗃 MySQL with Prisma ORM
- 🔐 JWT Authentication (Register & Login)
- 🧱 Middleware structure (logging, error handling, validation)
- 🚧 Rate Limiting using Redis
- 🔑 Session & Cookie management
- 📦 Modular folder structure (Controller, Middleware, Service, Repository)
- 🧪 Unit & Integration Testing with Jest + Supertest
- 🛡 Validation Middleware using Zod
- 🌐 CORS configuration
- 🛠 GitHub Actions CI Pipeline

---

## 📁 Project Structure

```
src/
│
├── controllers/        # Route logic
├── middleware/         # Custom middleware (logger, error handler, rateLimiter, validation)
├── routes/             # API groupings
├── services/           # Business logic
├── repositories/       # Prisma ORM access
├── utils/              # Helper functions
├── config/             # Environment/config utils
└── server.ts           # App entry point
```

---

## 🧪 Testing

- Framework: **Jest**
- HTTP testing: **Supertest**
- Test DB setup with `.env.test`
- Auto `prisma migrate deploy` before tests
- Handles open handles with teardown

### Run tests:
```bash
npm run test
```

---

## 🧰 Commands

| Script          | Description                  |
|-----------------|------------------------------|
| `npm run dev`   | Start dev server (ts-node)   |
| `npm run test`  | Run all tests                |
| `npm run build` | Compile TypeScript           |
| `npm start`     | Run compiled code            |

---

## 📄 Environment Variables

> Copy `.env.example` and create `.env` and `.env.test`.

### .env

```env
DATABASE_URL="mysql://root@localhost:3306/koa_learn"
SESSION_KEY="koa_secret"
JWT_SECRET="your_jwt_secret"
REDIS_URL="redis://127.0.0.1:6379"
```

### .env.test

```env
DATABASE_URL="mysql://root@localhost:3306/koa_test_db"
SESSION_KEY="koa_test_secret"
JWT_SECRET="test_jwt_secret"
REDIS_URL="redis://127.0.0.1:6379"
```

---

## 🧪 API Routes

| Method | Endpoint                        | Description                    |
|--------|----------------------------------|--------------------------------|
| GET    | `/`                              | Welcome route                  |
| POST   | `/api/v1/auth/register`          | Register new user              |
| POST   | `/api/v1/auth/login`             | Login and receive JWT          |
| GET    | `/api/v1/auth/protected`         | Access protected resource      |

---

## 🧱 Tech Stack

- Backend: Koa + TypeScript
- ORM: Prisma
- DB: MySQL
- Auth: JWT + bcrypt
- Validation: Zod
- Test: Jest + Supertest
- Rate Limiting: Redis + koa-ratelimit
- CI/CD: GitHub Actions

---

## ✅ GitHub Actions CI

Runs on every push to `main` and `development`:
- Sets up MySQL test container
- Deploys migrations
- Runs test suite

Badge:
![CI](https://github.com/ubudab109/koa-advanced-boilerplate/actions/workflows/test.yml/badge.svg?branch=master)

---

