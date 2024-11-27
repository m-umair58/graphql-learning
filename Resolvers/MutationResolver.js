import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Mutation = {
  async deleteGame(_, args) {
    // Delete the game by ID from the database
    await prisma.game.delete({
      where: {
        id: parseInt(args.id),
      },
    });

    // Return the updated list of games
    return prisma.game.findMany();
  },

  async addGame(_, args) {
    // Create a new game in the database
    const game = await prisma.game.create({
      data: {
        title: args.game.title,
        platform: args.game.platform,
      },
    });

    return game;
  },

  async updateGame(_, args) {
    // Update the game in the database
    const updatedGame = await prisma.game.update({
      where: {
        id: parseInt(args.id),
      },
      data: {
        ...args.edits, // Apply edits from args
      },
    });

    return updatedGame;
  },

  async addAuthor(_,args){
    const author = await prisma.author.create({
        data:{
            name:args.author.name,
            verified:JSON.parse(args.author.verified),
        }
    })
    return author;
  },

  async addReview(_,args){
    const review = await prisma.review.create({
      data:{
        rating: parseInt(args.review.rating),
        content: args.review.content,
        gameId: parseInt(args.review.game),
        authorId: parseInt(args.review.author)
      }
    })
    return review;
  }
};
