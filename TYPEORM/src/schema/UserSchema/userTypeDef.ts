export const  userTypeDef= `#graphql

    type User {
    
        user_id: ID!
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