import { AppDataSource } from "../data-source";
import { Manager } from "../Entity/Manager";
import { ManagerInfo } from "../types/manType";

class managerService {
  public getmanagers = async (): Promise<ManagerInfo[]> => {
    const manRepo = AppDataSource.getRepository(Manager);
    const managers = await manRepo.find();
    const managerInfos = managers.map((manager) => {
      const managerInfo: ManagerInfo = {
        managerName: manager.managerName,
        managerEmail: manager.managerEmail,
        managerPhone: manager.managerPhone,
        managerId: manager.managerId,
      };
      return managerInfo;
    });
    return managerInfos;
  };
  public static async manager(args: any) {
    const manRepo = AppDataSource.getRepository(Manager);
    let getManager = manRepo.findOne({ where: { managerId: args } });
    return getManager;
  }
  public static async deleteManager(managerId: string) {
    console.log("Manager delete number :", managerId);
    const manRepo = AppDataSource.getRepository(Manager);
    let deleteManager = await manRepo.delete({ managerId });
    return deleteManager;
  }
}
export default managerService;
