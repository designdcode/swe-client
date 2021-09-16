import React from "react";
import { useParams } from "react-router";
import BoardDetail from "../pages/Admin/BoardDetail";
import BoardPage from "../pages/Admin/BoardPage";
import Dashboard from "../pages/Admin/Dashboard";
import EditBoardPage from "../pages/Admin/EditBoardPage";
import UploadBoardPage from "../pages/Admin/UploadBoardPage";

interface IProps {
  param: string;
  subparam: string;
}

const AdminRouteHandler: React.VFC = () => {
  const { param, subparam } = useParams<IProps>();
  const routehandler = (param: string, subparam: string) => {
    switch (param) {
      case "dashboard":
        if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <Dashboard />;
      case "intro":
        if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <BoardPage />;
      case "value":
        if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <BoardPage />;
      case "edu":
        if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <BoardPage />;
      case "cooperation":
        if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <BoardPage />;
      case "community":
        if (
          subparam === "community-notice" ||
          subparam === "community-admission" ||
          subparam === "community-storage"
        )
          return <BoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else return <BoardPage />;
      default:
        return;
    }
  };

  return <>{routehandler(param, subparam)}</>;
};
export default AdminRouteHandler;
