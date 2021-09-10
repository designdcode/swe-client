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
