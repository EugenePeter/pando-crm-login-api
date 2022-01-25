import { Company } from "../../utils";

export const user_resolvers = {
  Query: {
    doesEmailExist: async (parent: any, { email }: any, context: any) => {
      console.log("PARENT:", parent);
      try {
        console.log("GRAPH EMAIL:", email);
        const result = await Company.findOne({ email });
        console.log("doesEmailExist result:", result);
        if (result) throw new Error("email exist");
      } catch (e) {
        console.log("EMAIL ALREADY EXIST", e);
        return e;
      }
    },
  },
  Mutation: {
    createCompany: async (_: any, { params }: any) => {
      console.log("ARG:", params);

      const company = new Company({
        ...params,
      });
      await company.save();
      console.log("COMPANY:", company);
      return company;
    },
  },
};
