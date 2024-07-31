
export const  authorTypeDef= `#graphql

    type Author {
    
        author_id: ID!
        author_name: String!
        description: String!
        books: String!
        isPublished: Boolean!
    }
    type Query {
        
        authors: [Author]
        author(id: ID!) : Author!
        
    }

`