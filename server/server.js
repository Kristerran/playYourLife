// const { json } = require('body-parser');
// require('dotenv').config();
// const { typeDefs, resolvers } = require('./schemas');
// // Import `authMiddleware()` function to be configured with the Apollo Server
// const { authMiddleware } = require('./utils/auth');
// const db = require('./config/connection');
// const PORT = process.env.PORT || 3001;
// const app = express();

// async function startApollo() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });

//   await server.start();
//   app.use(
//     '/graphql',
//     cors(),
//     json(),
//     expressMiddleware(server, {
//       context: async ({ req }) => ({ token: req.headers.token }),
//     })
//   );
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// }
// startApollo();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use('/public', express.static(path.join(__dirname, '../client/public')));

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import json from 'body-parser';
import dotenv from 'dotenv';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import db from './config/connection.js';
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
