import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Review = {
  async author(parent) {
    // Fetch the author related to this review using the authorId field
    return await prisma.author.findUnique({
      where: {
        id: parent.authorId, // Use parent.authorId to query the author table
      },
    });
  },

  async game(parent) {
    // Fetch the game related to this review using the gameId field
    return await prisma.game.findUnique({
      where: {
        id: parent.gameId, // Use parent.gameId to query the game table
      },
    });
  },
};
