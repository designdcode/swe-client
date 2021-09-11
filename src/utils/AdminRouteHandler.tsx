import React from "react";
import { useParams } from "react-router";
import BoardDetail from "../pages/Admin/BoardDetail";
import BoardPage from "../pages/Admin/BoardPage";
import Dashboard from "../pages/Admin/Dashboard";
import UploadBoardPage from "../pages/Admin/UploadBoardPage";
import UploadImagePage from "../pages/Admin/UploadImagePage";
import UploadStoragePage from "../pages/Admin/UploadStoragePage";

interface IProps {
  param: string;
  subparam: string;
}

const AdminRouteHandler: React.VFC = () => {
  const { param, subparam } = useParams<IProps>();
  const routehandler = (param: string, subparam: string) => {
    switch (param) {
      case "dashboard":
        return <Dashboard />;
      case "intro":
        if (subparam === "intro-storage") return <UploadStoragePage />;
        else return <UploadImagePage />;
      case "value":
        if (subparam === "value-storage") return <UploadStoragePage />;
        else return <UploadImagePage />;
      case "edu":
        if (subparam === "edu-storage") return <UploadStoragePage />;
        else return <UploadImagePage />;
      case "cooperation":
        if (subparam === "cooperation-storage") return <UploadStoragePage />;
        else return <UploadImagePage />;
      case "community":
        if (
          subparam === "community-notice" ||
          subparam === "community-admission" ||
          subparam === "community-storage"
        )
          return <BoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else return <UploadImagePage />;
      default:
        return;
    }
  };

  return <>{routehandler(param, subparam)}</>;
};
export default AdminRouteHandler;
