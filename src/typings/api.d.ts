/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createBoard
// ====================================================

export interface createBoard_createBoard {
  __typename: "createBoardResponse";
  ok: boolean;
  err: string | null;
}

export interface createBoard {
  createBoard: createBoard_createBoard;
}

export interface createBoardVariables {
  title?: string | null;
  content?: string | null;
  category: string;
  files?: (AttachModel | null)[] | null;
  images?: (AttachModel | null)[] | null;
  link?: string | null;
  type?: string | null;
  private?: boolean | null;
  writer?: string | null;
  showAttach?: boolean | null;
  inputCreatedAt?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBoardByCategory
// ====================================================

export interface getBoardByCategory_getBoardByCategory_data_files {
  __typename: "File";
  id: number;
  url: string;
  fileName: string;
}

export interface getBoardByCategory_getBoardByCategory_data_images {
  __typename: "Image";
  id: number;
  url: string;
  fileName: string;
}

export interface getBoardByCategory_getBoardByCategory_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  private: boolean | null;
  type: string | null;
  writer: string | null;
  inputCreatedAt: string | null;
  files: (getBoardByCategory_getBoardByCategory_data_files | null)[] | null;
  images: (getBoardByCategory_getBoardByCategory_data_images | null)[] | null;
  link: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface getBoardByCategory_getBoardByCategory {
  __typename: "getBoardByCategoryResponse";
  ok: boolean;
  err: string | null;
  data: getBoardByCategory_getBoardByCategory_data[] | null;
}

export interface getBoardByCategory {
  getBoardByCategory: getBoardByCategory_getBoardByCategory;
}

export interface getBoardByCategoryVariables {
  category: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteBoard
// ====================================================

export interface deleteBoard_deleteBoard {
  __typename: "deleteBoardResponse";
  ok: boolean;
  err: string | null;
}

export interface deleteBoard {
  deleteBoard: deleteBoard_deleteBoard;
}

export interface deleteBoardVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editBoard
// ====================================================

export interface editBoard_editBoard {
  __typename: "editBoardResponse";
  ok: boolean;
  err: string | null;
}

export interface editBoard {
  editBoard: editBoard_editBoard;
}

export interface editBoardVariables {
  id: number;
  title?: string | null;
  content?: string | null;
  link?: string | null;
  private?: boolean | null;
  type?: string | null;
  showAttach?: boolean | null;
  inputCreatedAt?: string | null;
  writer?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editFile
// ====================================================

export interface editFile_editFile {
  __typename: "editFileResponse";
  ok: boolean;
  err: string | null;
}

export interface editFile {
  editFile: editFile_editFile;
}

export interface editFileVariables {
  id: number;
  url: string;
  fileName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editImage
// ====================================================

export interface editImage_editImage {
  __typename: "editImageResponse";
  ok: boolean;
  err: string | null;
}

export interface editImage {
  editImage: editImage_editImage;
}

export interface editImageVariables {
  id: number;
  url: string;
  fileName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteFile
// ====================================================

export interface deleteFile_deleteFile {
  __typename: "deleteFileResponse";
  ok: boolean;
  err: string | null;
}

export interface deleteFile {
  deleteFile: deleteFile_deleteFile;
}

export interface deleteFileVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteImage
// ====================================================

export interface deleteImage_deleteImage {
  __typename: "deleteImageResponse";
  ok: boolean;
  err: string | null;
}

export interface deleteImage {
  deleteImage: deleteImage_deleteImage;
}

export interface deleteImageVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createFile
// ====================================================

export interface createFile_createFile {
  __typename: "createFileResponse";
  ok: boolean;
  err: string | null;
}

export interface createFile {
  createFile: createFile_createFile;
}

export interface createFileVariables {
  url: string;
  fileName: string;
  boardId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createImage
// ====================================================

export interface createImage_createImage {
  __typename: "createFileResponse";
  ok: boolean;
  err: string | null;
}

export interface createImage {
  createImage: createImage_createImage;
}

export interface createImageVariables {
  url: string;
  fileName: string;
  boardId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createLink
// ====================================================

export interface createLink_createLink {
  __typename: "createLinkResponse";
  ok: boolean;
  err: string | null;
}

export interface createLink {
  createLink: createLink_createLink;
}

export interface createLinkVariables {
  title: string;
  url: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteLink
// ====================================================

export interface deleteLink_deleteLink {
  __typename: "deleteLinkResponse";
  ok: boolean;
  err: string | null;
}

export interface deleteLink {
  deleteLink: deleteLink_deleteLink;
}

export interface deleteLinkVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editLink
// ====================================================

export interface editLink_editLink {
  __typename: "editLinkResponse";
  ok: boolean;
  err: string | null;
}

export interface editLink {
  editLink: editLink_editLink;
}

export interface editLinkVariables {
  id: number;
  title?: string | null;
  url?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editPopup
// ====================================================

export interface editPopup_editPopup {
  __typename: "editPopupResponse";
  ok: boolean;
  err: string | null;
}

export interface editPopup {
  editPopup: editPopup_editPopup;
}

export interface editPopupVariables {
  up: string;
  url?: string | null;
  link?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createReply
// ====================================================

export interface createReply_createReply {
  __typename: "createReplyResponse";
  ok: boolean;
  err: string | null;
}

export interface createReply {
  createReply: createReply_createReply;
}

export interface createReplyVariables {
  boardId: number;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editReply
// ====================================================

export interface editReply_editReply {
  __typename: "editReplyResponse";
  ok: boolean;
  err: string | null;
}

export interface editReply {
  editReply: editReply_editReply;
}

export interface editReplyVariables {
  replyId: number;
  content?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteReply
// ====================================================

export interface deleteReply_deleteReply {
  __typename: "deleteReplyResponse";
  ok: boolean;
  err: string | null;
}

export interface deleteReply {
  deleteReply: deleteReply_deleteReply;
}

export interface deleteReplyVariables {
  replyId: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBoardById
// ====================================================

export interface getBoardById_getBoardById_data_replies {
  __typename: "Reply";
  id: number;
  content: string | null;
}

export interface getBoardById_getBoardById_data_files {
  __typename: "File";
  id: number;
  url: string;
  fileName: string;
}

export interface getBoardById_getBoardById_data_images {
  __typename: "Image";
  id: number;
  url: string;
  fileName: string;
}

export interface getBoardById_getBoardById_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  private: boolean | null;
  type: string | null;
  writer: string | null;
  showAttach: boolean | null;
  inputCreatedAt: string | null;
  replies: (getBoardById_getBoardById_data_replies | null)[] | null;
  files: (getBoardById_getBoardById_data_files | null)[] | null;
  images: (getBoardById_getBoardById_data_images | null)[] | null;
  link: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface getBoardById_getBoardById {
  __typename: "getBoardbyIdResponse";
  ok: boolean;
  err: string | null;
  data: getBoardById_getBoardById_data | null;
}

export interface getBoardById {
  getBoardById: getBoardById_getBoardById;
}

export interface getBoardByIdVariables {
  id: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLinks
// ====================================================

export interface getLinks_getLinks_data {
  __typename: "Link";
  id: number;
  url: string;
  title: string;
  createdAt: string | null;
}

export interface getLinks_getLinks {
  __typename: "getLinksResponse";
  ok: boolean;
  err: string | null;
  data: (getLinks_getLinks_data | null)[] | null;
}

export interface getLinks {
  getLinks: getLinks_getLinks;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBoard
// ====================================================

export interface getBoard_getBoard_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  link: string | null;
  createdAt: string | null;
  inputCreatedAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface getBoard_getBoard {
  __typename: "getBoardResponse";
  ok: boolean;
  err: string | null;
  data: getBoard_getBoard_data[] | null;
}

export interface getBoard {
  getBoard: getBoard_getBoard;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserLogin
// ====================================================

export interface UserLogin_UserLogin_data {
  __typename: "Auth";
  id: string;
  stno: string;
}

export interface UserLogin_UserLogin {
  __typename: "UserLoginReturn";
  success: boolean;
  error: string | null;
  data: UserLogin_UserLogin_data | null;
}

export interface UserLogin {
  UserLogin: UserLogin_UserLogin;
}

export interface UserLoginVariables {
  id: string;
  pwd: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getBoardByMonth
// ====================================================

export interface getBoardByMonth_getBoardByMonth_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  link: string | null;
  createdAt: string | null;
  inputCreatedAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface getBoardByMonth_getBoardByMonth {
  __typename: "getBoardByMonthResponse";
  ok: boolean;
  err: string | null;
  data: getBoardByMonth_getBoardByMonth_data[] | null;
}

export interface getBoardByMonth {
  getBoardByMonth: getBoardByMonth_getBoardByMonth;
}

export interface getBoardByMonthVariables {
  category: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPopupStatus
// ====================================================

export interface getPopupStatus_getPopupStatus_data {
  __typename: "Popup";
  url: string | null;
  up: boolean;
  link: string | null;
}

export interface getPopupStatus_getPopupStatus {
  __typename: "getPopupStatusResponse";
  ok: boolean;
  err: string | null;
  data: getPopupStatus_getPopupStatus_data | null;
}

export interface getPopupStatus {
  getPopupStatus: getPopupStatus_getPopupStatus;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getVideoLink
// ====================================================

export interface getVideoLink_getVideoLink {
  __typename: "getVideoLinkResponse";
  ok: boolean;
  err: string | null;
  link: string | null;
}

export interface getVideoLink {
  getVideoLink: getVideoLink_getVideoLink;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchBoard
// ====================================================

export interface searchBoard_searchBoard_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  private: boolean | null;
  type: string | null;
  writer: string | null;
  link: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface searchBoard_searchBoard {
  __typename: "searchBoardResponse";
  ok: boolean;
  err: string | null;
  data: (searchBoard_searchBoard_data | null)[] | null;
}

export interface searchBoard {
  searchBoard: searchBoard_searchBoard;
}

export interface searchBoardVariables {
  category: string;
  title: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchBoardByContent
// ====================================================

export interface searchBoardByContent_searchBoardByContent_data {
  __typename: "Board";
  id: number;
  title: string | null;
  content: string | null;
  category: string;
  private: boolean | null;
  type: string | null;
  writer: string | null;
  link: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface searchBoardByContent_searchBoardByContent {
  __typename: "searchBoardByContentResponse";
  ok: boolean;
  err: string | null;
  data: (searchBoardByContent_searchBoardByContent_data | null)[] | null;
}

export interface searchBoardByContent {
  searchBoardByContent: searchBoardByContent_searchBoardByContent;
}

export interface searchBoardByContentVariables {
  category: string;
  content: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AttachModel {
  url?: string | null;
  fileName?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
