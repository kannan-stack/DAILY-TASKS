import { ApolloServer } from "@apollo/server";
import { AppDataSource } from "./data-source";
import { typeDefs } from "./schema/typeDef";
import { resolvers } from "./schema/resolver";
import { startStandaloneServer } from "@apollo/server/standalone"

AppDataSource.initialize()

    .then(()=>
        console.log("Db created"))
    .catch(()=>
        console.log("Failed to create"))


const Server = new ApolloServer ({
    typeDefs,
    resolvers,
})

startStandaloneServer(Server,{
    listen: { port :5000 },
}).then(({url})=>{
    console.log(`Server is reday ${url}`)
})





