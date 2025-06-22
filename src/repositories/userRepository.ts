import { PrismaClient, User } from '../generated/prisma';
const prisma = new PrismaClient();

export const createUser = async (email: string, password: string): Promise<User> => {
  return prisma.user.create({ data: { email, password } });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({ where: { email } });
};
