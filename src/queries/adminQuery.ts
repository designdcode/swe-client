import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard(
    $title: String
    $content: String
    $category: String!
    $files: [AttachModel]
    $images: [AttachModel]
    $link: String
    $type: String
    $private: Boolean
    $writer: String
    $showAttach: Boolean
  ) {
    createBoard(
      title: $title
      content: $content
      category: $category
      files: $files
      images: $images
      link: $link
      type: $type
      private: $private
      writer: $writer
      showAttach: $showAttach
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
        private
        type
        writer
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
    $private: Boolean
    $type: String
    $showAttach: Boolean
  ) {
    editBoard(
      id: $id
      title: $title
      content: $content
      link: $link
      private: $private
      type: $type
      showAttach: $showAttach
    ) {
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

export const CREATE_LINK = gql`
  mutation createLink($title: String!, $url: String!) {
    createLink(title: $title, url: $url) {
      ok
      err
    }
  }
`;

export const DELETE_LINK = gql`
  mutation deleteLink($id: Int!) {
    deleteLink(id: $id) {
      ok
      err
    }
  }
`;

export const EDIT_LINK = gql`
  mutation editLink($id: Int!, $title: String, $url: String) {
    editLink(id: $id, title: $title, url: $url) {
      ok
      err
    }
  }
`;

export const EDIT_POPUP = gql`
  mutation editPopup($up: String!, $url: String) {
    editPopup(up: $up, url: $url) {
      ok
      err
    }
  }
`;

export const CREATE_REPLY = gql`
  mutation createReply($boardId: Int!, $content: String!) {
    createReply(boardId: $boardId, content: $content) {
      ok
      err
    }
  }
`;
export const EDIT_REPLY = gql`
  mutation editReply($replyId: Int!, $content: String) {
    editReply(replyId: $replyId, content: $content) {
      ok
      err
    }
  }
`;

export const DELETE_REPLY = gql`
  mutation deleteReply($replyId: Int!) {
    deleteReply(replyId: $replyId) {
      ok
      err
    }
  }
`;
