export const empType = `#graphql

    type Employee {
        empId:ID
        empName: String!
        empSalary: Int!
        empEmail: String !
        empGender: String!
        empPlace: String!
        empPhone: String!
        empActive: Boolean

    }

    input CreateEmp {           
        empName: String!
        empSalary: Float!
        empEmail: String!
        empGender: String!
        empPlace: String!
        empPhone: String!    
    }

    type Query{
        employees: [Employee!]
        employee(id:ID!): Employee!
    }
    
    type Mutation {
        createEmp(input:CreateEmp) : Employee
        deleteEmp(empId:ID!) :Employee
    }
`;
