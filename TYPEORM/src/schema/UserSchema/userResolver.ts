import userService from "../../service/userService";

export const userResolver = {
  Query: {
    users: async (parent: unknown, context: any) => {
      const newService = new userService();
      return newService.users();
    },
    user(parent: unknown, args: any) {
      return userService.user(args.user_id);
    },
  },
};
