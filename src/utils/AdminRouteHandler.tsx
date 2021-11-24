import React from "react";
import { useParams } from "react-router";
import BoardDetail from "../pages/Admin/BoardDetail";
import StoragePage from "../pages/Admin/StoragePage";
import Dashboard from "../pages/Admin/Dashboard";
import EditBoardPage from "../pages/Admin/EditBoardPage";
import UploadBoardPage from "../pages/Admin/UploadBoardPage";
import ImageBoardPage from "../pages/Admin/ImageBoardPage";
import UploadImageBoardPage from "../pages/Admin/UploadImageBoardPage";
import EditImageBoardPage from "../pages/Admin/EditImageBoardPage";
import LinkManager from "../pages/Admin/LinkManager";

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
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;
      case "basic":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "major":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "integration":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "value":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "cooperation":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "achievement":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <ImageBoardPage />;

      case "community":
        if (subparam === `create-image-${param}`)
          return <UploadImageBoardPage />;
        else if (subparam === `edit-image-${param}`)
          return <EditImageBoardPage />;
        else if (subparam === `create-${param}`) return <UploadBoardPage />;
        else if (subparam === `detail-${param}`) return <BoardDetail />;
        else if (subparam === `edit-${param}`) return <EditBoardPage />;
        else if (subparam.includes("storage")) return <StoragePage />;
        else return <StoragePage />;
      case "sitelink":
        return <LinkManager />;
      default:
        return;
    }
  };

  return <>{routehandler(param, subparam)}</>;
};
export default AdminRouteHandler;
