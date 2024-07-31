import { DataSource } from "typeorm";
import { Author  } from "./Entity/Author"
import { User } from "./Entity/User"

export const AppDataSource = new DataSource({
      type : "postgres",
      host : "localhost",
      port : 5432,
      username : "postgres",
      password : "kannan",
      database : "UserDetails",
      synchronize : true,
      logging : true,
      entities :[Author, User],
      subscribers : [],
      migrations : [],
})