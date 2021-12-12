import React from "react";
import { useParams } from "react-router";
import loadable from "@loadable/component";

interface IProps {
  param: string;
  subparam: string;
}

const BoardDetail = loadable(() => import("../pages/Admin/BoardDetail/index"));
const StoragePage = loadable(() => import("../pages/Admin/StoragePage/index"));
const Dashboard = loadable(() => import("../pages/Admin/Dashboard/index"));
const EditBoardPage = loadable(
  () => import("../pages/Admin/EditBoardPage/index")
);
const UploadBoardPage = loadable(
  () => import("../pages/Admin/UploadBoardPage/index")
);
const ImageBoardPage = loadable(
  () => import("../pages/Admin/ImageBoardPage/index")
);
const UploadImageBoardPage = loadable(
  () => import("../pages/Admin/UploadImageBoardPage")
);
const EditImageBoardPage = loadable(
  () => import("../pages/Admin/EditImageBoardPage/index")
);
const LinkManager = loadable(() => import("../pages/Admin/LinkManager/index"));

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
        else return <StoragePage />;

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
