import empService from "../../service/empService";
import { CreateEmployeeInput } from "../../types/empType";

export const empResolver = {
  Query: {
    employees: async (parent: unknown, context: any) => {
      const employeeService = new empService();
      return employeeService.getEmployees();
    },
    employee(parent: any, args: { id: string }) {
      return empService.getEmployee(args.id);
    },
  },
  Mutation: {
    createEmp: async (parent: any, args: { input: CreateEmployeeInput }) => {
      return empService.createEmployee(args.input);
    },
    deleteEmp: async (parent: any, args: { empId: string }) => {
      console.log("resolver args", args.empId);
      return empService.deleteEmployee(args.empId);
    },
  },
};
