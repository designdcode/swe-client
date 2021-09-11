import { gql } from "@apollo/client";

export const GET_BOARD = gql`
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
