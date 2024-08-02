export const userTypeDef = `#graphql

    type User {
    
        userId: ID!
        username: String!
        age: Int!
        gender: String!
        place: String!
    }
    type Query {
        
        users: [User]
        user(id: ID!) : User!
        
    }

`
