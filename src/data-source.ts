import { DataSource } from "typeorm"
import { Employee } from "./Entity/Employee"
import { Manager } from "./Entity/Manager"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "kannan",
    database: "postgres",
    // synchronize: true,
    logging: true,
    entities: [Employee,Manager],
    subscribers: [],
    migrations: [],
})