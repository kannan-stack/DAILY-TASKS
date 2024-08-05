import managerService from "../../service/managerService";

export const managerResolver = {
  Query: {
    managers: async (parent: unknown, context: any) => {
      const newService = new managerService();
      return newService.getmanagers();
    },
    manager(parent: unknown, args: { managerId: string }) {
      return managerService.manager(args.managerId);
    },
  },
  Mutation: {
    deleteManager(parent: unknown, args: { managerId: string }) {
        return managerService.deleteManager(args.managerId)
    },
  },
};
