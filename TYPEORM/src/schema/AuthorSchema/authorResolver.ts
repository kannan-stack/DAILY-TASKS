import authorService from "../../service/authorService";

export const authorResolver = {
  Query: {
    authors: async (parent: any, context: any) => {
      const newService = new authorService();
      return newService.authors();
    },
    author(parent:unknown,args:any){
        return authorService.author(args.author_id)
    }
},
};

