import React from "react";
import { useParams } from "react-router";
import loadable from "@loadable/component";
import {
  IntroMemberCreate,
  IntroMemberEdit,
  IntroMemberList,
  IntroMemberShow,
} from "../pages/Admin/Intro/Members";
import { ImageCreate, ImageEdit, ImageShow } from "../pages/Admin/ImageBoard";
import {
  BoardCreate,
  BoardEdit,
  BoardList,
  BoardShow,
} from "../pages/Admin/Board";
import {
  ImageUploadWithLink,
  ImageUploadWithModal,
} from "../pages/Admin/ImageUploadWithModal";

interface IProps {
  param: string;
  subparam: string;
}

const Dashboard = loadable(() => import("../pages/Admin/Dashboard/index"));
const VideoLink = loadable(() => import("../pages/Admin/VideoLink/index"));
const PopupManager = loadable(
  () => import("../pages/Admin/PopupManager/index")
);

const AdminRouteHandler: React.VFC = () => {
  const { param, subparam } = useParams<IProps>();
  const routehandler = (param: string, subparam: string) => {
    switch (param) {
      case "dashboard":
        return <Dashboard />;
      case "intro":
        if (subparam === "list") return <IntroMemberList />;
        else if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else if (subparam === "member-create") return <IntroMemberCreate />;
        else if (subparam === "member-show") return <IntroMemberShow />;
        else if (subparam === "member-edit") return <IntroMemberEdit />;
        else break;

      case "basic":
        if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else break;

      case "major":
        if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else break;

      case "integration":
        if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else break;

      case "value":
        if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else break;

      case "cooperation":
        if (subparam === "show") return <ImageShow />;
        else if (subparam === "create") return <ImageCreate />;
        else if (subparam === "edit") return <ImageEdit />;
        else break;

      case "achievement":
        if (subparam === "list") return <BoardList />;
        else if (subparam === "show") return <BoardShow />;
        else if (subparam === "create") return <BoardCreate />;
        else if (subparam === "edit") return <BoardEdit />;
        else break;

      case "community":
        if (subparam === "list") return <BoardList />;
        else if (subparam === "show") return <BoardShow />;
        else if (subparam === "create") return <BoardCreate />;
        else if (subparam === "edit") return <BoardEdit />;
        else if (subparam.includes("sitemap")) return <ImageUploadWithModal />;
        else break;

      case "sitelink":
        return <ImageUploadWithLink />;
      case "link":
        return <VideoLink />;
      case "popup":
        return <PopupManager />;
      default:
        return;
    }
  };

  return <>{routehandler(param, subparam)}</>;
};
export default AdminRouteHandler;
