import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

import  resolvers  from './resolvers'
import app from './app';

const typeDefs = importSchema('./src/schema/index.graphql')
const schema = makeExecutableSchema({ typeDefs, resolvers })
const server = new ApolloServer({schema})

server.applyMiddleware({app})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);