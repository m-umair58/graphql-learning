import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Query = {
  async games() {
    // Fetch all games from the database
    return await prisma.game.findMany();
  },

  async game(_, args) {
    // Fetch a single game by ID from the database
    return await prisma.game.findUnique({
      where: {
        id: parseInt(args.id), // Ensure the ID is an integer
      },
    });
  },

  async authors() {
    // Fetch all authors from the database
    return await prisma.author.findMany();
  },

  async author(_, args) {
    // Fetch a single author by ID from the database
    return await prisma.author.findUnique({
      where: {
        id: parseInt(args.id), // Ensure the ID is an integer
      },
    });
  },

  async reviews() {
    // Fetch all reviews from the database
    return await prisma.review.findMany();
  },

  async review(_, args) {
    // Fetch a single review by ID from the database
    return await prisma.review.findUnique({
      where: {
        id: parseInt(args.id), // Ensure the ID is an integer
      },
    });
  },
};
