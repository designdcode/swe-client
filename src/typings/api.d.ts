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
// GraphQL query operation: getBoardById
// ====================================================

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
  files: (getBoardById_getBoardById_data_files | null)[] | null;
  images: (getBoardById_getBoardById_data_images | null)[] | null;
  link: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deleteAt: string | null;
}

export interface getBoardById_getBoardById {
  __typename: "getBoardResponse";
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
