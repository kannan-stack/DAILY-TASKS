export const managerType = `#graphql

    type Manager {
   
        managerId: Int !
        managerName: String!
        managerEmail: String !
        managerPhone: String!
    }

    input CreateManager{

        managerName: String!
        managerEmail: String !
        managerPhone: String!
    
    }
    type Query{
        managers:[Manager!]!
        manager(managerId:Int!):Manager
    }
    
    type Mutation {
        createManager(input:CreateManager) : Manager
        deleteManager(managerId:ID!) : Manager
    }

`;
