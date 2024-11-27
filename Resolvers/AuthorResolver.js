import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Author = {
  async reviews(parent) {
    // Fetch reviews associated with the given author's ID
    return await prisma.review.findMany({
      where: {
        authorId: parent.id, // Match the author's ID
      },
    });
  },
};
