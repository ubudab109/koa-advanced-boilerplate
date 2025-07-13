# Koa Advanced Boilerplate

![CI](https://github.com/ubudab109/koa-advanced-boilerplate/actions/workflows/test.yml/badge.svg?branch=master)

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


## Security Practices
- Use helmet middleware (via koa-helmet) to secure HTTP headers
- Sanitize and validate incoming data to prevent injection attacks
- Enable CORS carefully with koa-cors
- Use rate limiting and logging to monitor suspicious activities
- Always use HTTPS in production environments
- Use strong secrets for JWT and session keys
- Separate configuration using environment-specific `.env` files (e.g., .env.test)
- Ensure CI/CD does not expose secrets in logs

## Additional Insights
- KOA's small core allows for high customizability, making it suitable for developers who want more control
- Its lean architecture makes KOA a good fit for modern architectures like serverless or cloud functions
- Because KOA relies on external modules for most functionality, developers must manage dependencies and compatibility more carefully
- CI/CD setup with GitHub Actions automates database migration and test runs using test containers
- Redis usage in testing requires proper connection teardown to prevent open handles

## Pros & Cons
✅ Pros:
- Native async/await
- Lightweight and clean design
- More control over request flow
- Easier to scale with clear layer separation

❌ Cons:
- Smaller ecosystem
- More setup required (e.g., routing, sessions)
- Learning curve slightly higher

## Benchmark Results
The benchmark compared Express, Koa across 3 endpoints: /, /json, and /async.
Koa consistently outperformed Express in terms of requests per second and latency.

| Framework | Endpoint | Requests/sec | Latency | Throughput |
|-----------|----------|---------------|---------|------------|
| Express   | /        | 5,482 req/sec | 17.74 ms | 1.35 MB/sec |
| Express   | /json    | 5,244 req/sec | 18.55 ms | 1.44 MB/sec |
| Express   | /async   | 4,406 req/sec | 22.26 ms | 1.09 MB/sec |
| Koa       | /        | 18,586 req/sec | 4.86 ms | 3.31 MB/sec |
| Koa       | /json    | 16,684 req/sec | 5.47 ms | 3.44 MB/sec |
| Koa       | /async   | 6,324 req/sec | 15.38 ms | 1.16 MB/sec |

---

