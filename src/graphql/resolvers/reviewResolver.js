const Review = require('../../models/review');
const { analyzeSentiment } = require('../../services/geminiService');

module.exports = {
  Query: {
    getReviews: async () => {
      return await Review.findAll();
    },
    getReview: async (_, { id }) => {
      return await Review.findByPk(id);
    },
  },
  Mutation: {
    createReview: async (_, { input }) => {
      const sentiment = await analyzeSentiment(input.comment || "");
      return await Review.create({
        ...input,
        sentiment,
      });
    },

    updateReview: async (_, { id, input }) => {
      const review = await Review.findByPk(id);
      if (!review) throw new Error('Review not found');

      const sentiment = await analyzeSentiment(input.comment || "");
      return await review.update({
        ...input,
        sentiment,
      });
    },

    deleteReview: async (_, { id }) => {
      const review = await Review.findByPk(id);
      if (!review) throw new Error('Review not found');
      await review.destroy();
      return 'Review deleted successfully';
    },
  }
};
