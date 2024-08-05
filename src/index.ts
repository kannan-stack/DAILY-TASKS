import { ApolloServer } from "apollo-server";
import { AppDataSource } from "./data-source";
import { typeDefs } from "./schema/typedefs";
import { resolvers } from "./schema/resolvers";

AppDataSource.initialize()
  .then(() => {
    console.log("DB CREATED SUCCESSFULLY");
  })
  .catch((e) => {
    console.log("FAILED TO CREATE DB", e);
  });

const Server = new ApolloServer({
  typeDefs,
  resolvers,
});

Server.listen().then(({ url }) => {
  console.log(`Server is ready ${url}`);
});
