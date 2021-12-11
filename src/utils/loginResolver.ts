import { gql } from "@apollo/client";
import { toast } from "react-toastify";
import client, { adminLoginVar } from "./apollo";
import { forceHistory } from "./forceHistory";

export const adminQuery = gql`
  query adminLogin {
    adminLogin @client
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

export const userLogin = (stno: string) => {
  localStorage.setItem(`stno`, `${stno}`);
};

export const userLogOut = () => {
  localStorage.removeItem("stno");
  toast.success("로그아웃 되었습니다");
  forceHistory.push("/main");
};
