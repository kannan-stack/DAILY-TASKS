import { AppDataSource } from "../data-source";
import { Employee } from "../Entity/Employee";
import camelcaseKeys, { CamelCaseKeys } from "camelcase-keys";
import { CreateEmployeeInput, EmployeeInfo } from "../types/empType";

class EmpService {
  public getEmployees = async (): Promise<EmployeeInfo[]> => {
    const empRep = AppDataSource.getRepository(Employee);

    const employees = await empRep.find();

    const employeeInfos = employees.map((employee) => {
      const employeeInfo: EmployeeInfo = {
        ...employee,
        empId: employee.empId as number,
      };

      return employeeInfo;
    });

    return employeeInfos;
  };

  public static async getEmployee(args: any) {
    const empRep = AppDataSource.getRepository(Employee);
    let employee = await empRep.findOne({ where: { empId: args } });
    return employee;
  }

  public static async createEmployee(employeeInput: CreateEmployeeInput) {
    const empRepo = AppDataSource.getRepository(Employee);

    const employee: Employee = {
      empActive: false,
      empEmail: employeeInput.empEmail,
      empGender: employeeInput.empGender,
      empName: employeeInput.empName,
      empSalary: employeeInput.empSalary,
      empPhone: employeeInput.empPhone,
      empPlace: employeeInput.empPlace,
    };

    await empRepo.save(employee);

    return employee;
  }

  public static async deleteEmployee(args: any) {
    console.log("print deleted user number :", args);
    const empRep = AppDataSource.getRepository(Employee);
    let deleteEmployee = await empRep.delete({ empId: args });
    return deleteEmployee;
  }
}

export default EmpService;
