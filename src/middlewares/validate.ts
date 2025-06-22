import { Context, Next } from "koa";
import { ZodSchema } from "zod";

export const validateRequestBody = (schema: ZodSchema) => {
  return async (ctx: Context, next: Next) => {
    const result = schema.safeParse(ctx.request.body);

    if (!result.success) {
      ctx.status = 400;
      ctx.body = {
        error: 'Validation error',
        details: result.error.flatten().fieldErrors,
      };
      return;
    }

    ctx.request.body = result.data;
    await next();
  };
};
