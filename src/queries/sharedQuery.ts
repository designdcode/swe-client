import { gql } from "@apollo/client";

export const GET_BOARD_BY_ID = gql`
  query getBoardById($id: Int!) {
    getBoardById(id: $id) {
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
        showAttach
        inputCreatedAt
        replies {
          id
          content
        }
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

export const GET_LINK = gql`
  query getLinks {
    getLinks {
      ok
      err
      data {
        id
        url
        title
        createdAt
      }
    }
  }
`;

export const GET_BOARD = gql`
  query getBoard {
    getBoard {
      ok
      err
      data {
        id
        title
        content
        category
        link
        createdAt
        updatedAt
        deleteAt
      }
    }
  }
`;

export const USER_LOGIN = gql`
  mutation UserLogin($id: String!, $pwd: String!) {
    UserLogin(id: $id, pwd: $pwd) {
      success
      error
      data {
        id
        stno
      }
    }
  }
`;

export const GET_BOARD_BY_MONTH = gql`
  query getBoardByMonth($category: String!) {
    getBoardByMonth(category: $category) {
      ok
      err
      data {
        id
        title
        content
        category
        link
        createdAt
        updatedAt
        deleteAt
      }
    }
  }
`;

export const GET_POPUP_STATUS = gql`
  query getPopupStatus {
    getPopupStatus {
      ok
      err
      data {
        url
        up
      }
    }
  }
`;

export const GET_VIDEO_LINK = gql`
  query getVideoLink {
    getVideoLink {
      ok
      err
      link
    }
  }
`;

export const SEARCH_BOARD = gql`
  query searchBoard($category: String!, $title: String!) {
    searchBoard(category: $category, title: $title) {
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
        link
        createdAt
        updatedAt
        deleteAt
      }
    }
  }
`;

export const SEARCH_BOARD_BY_CONTENT = gql`
  query searchBoardByContent($category: String!, $content: String!) {
    searchBoardByContent(category: $category, content: $content) {
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
        link
        createdAt
        updatedAt
        deleteAt
      }
    }
  }
`;
