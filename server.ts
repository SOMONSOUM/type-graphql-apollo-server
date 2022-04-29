import 'reflect-metadata';
import { ApolloServer, gql } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import AuthResolver from './src/resolvers/AuthResolver';
import db from './src/database/connection';
import * as dotenv from 'dotenv';
dotenv.config();

export const createServer = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver],
    }),
    context: ({ req, res }) => {
      return {
        req,
        res,
        db
      }
    },
  })

  server.listen(process.env.PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })

  return server
}

createServer()
