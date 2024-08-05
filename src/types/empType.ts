export type EmployeeInfo = {
  empId: number;
  empName: string;
  empSalary: number;
  empEmail: string;
  empGender: string;
  empPlace: string;
  empPhone: number;
  empActive: boolean;
};

export type CreateEmployeeInput = {
  empName: string;
  empSalary: number;
  empEmail: string;
  empGender: string;
  empPlace: string;
  empPhone: number;
  empActive: boolean;
};
