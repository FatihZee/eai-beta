const { gql } = require('graphql-tag');

module.exports = gql`
  type Review {
    id: Int!
    user_id: Int!
    menu_id: Int!
    order_id: Int!
    rating: Int!
    comment: String
    sentiment: String
    created_at: String
    updated_at: String
  }

  input ReviewInput {
    user_id: Int!
    menu_id: Int!
    order_id: Int!
    rating: Int!
    comment: String
  }

  type Query {
    getReviews: [Review]
    getReview(id: Int!): Review
  }

  type Mutation {
    createReview(input: ReviewInput): Review
    updateReview(id: Int!, input: ReviewInput): Review
    deleteReview(id: Int!): String
  }
`;
