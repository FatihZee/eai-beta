const reviewTypeDefs = require('./schemas/reviewSchema');
const reviewResolvers = require('./resolvers/reviewResolver');

module.exports = {
  typeDefs: [reviewTypeDefs],
  resolvers: [reviewResolvers],
};
