import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


import { typeDefs } from "./schemas.js";
import {resolvers} from "./Resolvers/Resolver.js"

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log("server started at port 4000");