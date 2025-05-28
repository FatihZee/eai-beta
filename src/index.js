const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const express = require('express');
const sequelize = require('./config/database');
const graphql = require('./graphql');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

async function startServer() {
  const server = new ApolloServer({
    typeDefs: graphql.typeDefs,
    resolvers: graphql.resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        return { req, res };
      }
    })
  );

  sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}/graphql`);
    });
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

startServer();
