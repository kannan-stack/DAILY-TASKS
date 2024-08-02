export const authorTypeDef = `#graphql

    type Author {
    
        authorId: ID!
        authorName: String!
        description: String!
        books: String!
   
    }
    type Query {
        
        authors: [Author]
        author(authorId: ID!) : Author!
        
    }

`;
