import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Game = {
  async reviews(parent) {
    // Fetch reviews associated with the given game's ID
    return await prisma.review.findMany({
      where: {
        gameId: parent.id, // Match the game's ID
      },
    });
  },
};
