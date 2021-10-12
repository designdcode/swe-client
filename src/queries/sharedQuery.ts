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
