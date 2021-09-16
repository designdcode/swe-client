import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $title: String
    $content: String
    $category: String!
    $files: [AttachModel]
    $images: [AttachModel]
    $link: String
  ) {
    createBoard(
      title: $title
      content: $content
      category: $category
      files: $files
      images: $images
      link: $link
    ) {
      ok
      err
    }
  }
`;

export const GET_BOARD_BY_CATEGORY = gql`
  query getBoardByCategory($category: String!) {
    getBoardByCategory(category: $category) {
      ok
      err
      data {
        id
        title
        content
        category
        files {
          id
          url
          fileName
        }
        images {
          id
          url
          fileName
        }
        link
        createdAt
        updatedAt
        deleteAt
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: Int!) {
    deleteBoard(id: $id) {
      ok
      err
    }
  }
`;

export const EDIT_BOARD = gql`
  mutation editBoard(
    $id: Int!
    $title: String
    $content: String
    $link: String
  ) {
    editBoard(id: $id, title: $title, content: $content, link: $link) {
      ok
      err
    }
  }
`;

export const EDIT_FILE = gql`
  mutation editFile($id: Int!, $url: String!, $fileName: String!) {
    editFile(id: $id, url: $url, fileName: $fileName) {
      ok
      err
    }
  }
`;

export const EDIT_IMAGE = gql`
  mutation editImage($id: Int!, $url: String!, $fileName: String!) {
    editImage(id: $id, url: $url, fileName: $fileName) {
      ok
      err
    }
  }
`;

export const DELETE_FILE = gql`
  mutation deleteFile($id: Int!) {
    deleteFile(id: $id) {
      ok
      err
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: Int!) {
    deleteImage(id: $id) {
      ok
      err
    }
  }
`;

export const CREATE_FILE = gql`
  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {
    createFile(url: $url, fileName: $fileName, boardId: $boardId) {
      ok
      err
    }
  }
`;

export const CREATE_IMAGE = gql`
  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {
    createImage(url: $url, fileName: $fileName, boardId: $boardId) {
      ok
      err
    }
  }
`;
