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
