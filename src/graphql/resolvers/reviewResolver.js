const Review = require('../../models/review');

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
      return await Review.create(input);
    },
    updateReview: async (_, { id, input }) => {
      const review = await Review.findByPk(id);
      if (!review) throw new Error('Review not found');
      return await review.update(input);
    },
    deleteReview: async (_, { id }) => {
      const review = await Review.findByPk(id);
      if (!review) throw new Error('Review not found');
      await review.destroy();
      return 'Review deleted successfully';
    },
  }
};
