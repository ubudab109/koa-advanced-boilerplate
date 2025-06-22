import Router from '@koa/router';
import { login, register } from '../controllers/authController';
import authMiddleware from '../middlewares/auth';
import { validateRequestBody } from '../middlewares/validate';
import { authSchema } from '../validations/authValidation';

const router = new Router();

router.post('/register', validateRequestBody(authSchema) , register);
router.post('/login', validateRequestBody(authSchema), login);
router.get('/protected', authMiddleware, async (ctx) => {
  ctx.body = { message: 'You are authorized!' };
});

export default router;
