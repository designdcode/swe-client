import { gql } from "@apollo/client";
import client, { adminLoginVar } from "./apollo";

export const adminQuery = gql`
  extend type Query {
    adminLogin: Boolean!
  }
`;

export const adminLogin = () => {
  client.cache.writeQuery({
    query: adminQuery,
    data: {
      adminLogin: true,
    },
  });
  localStorage.setItem("admin", `${Date.now() + 7200000}`);
  adminLoginVar(true);
};

export const adminLogOut = () => {
  client.cache.writeQuery({
    query: adminQuery,
    data: {
      adminLogin: false,
    },
  });
  localStorage.removeItem("admin");
  adminLoginVar(false);
};
