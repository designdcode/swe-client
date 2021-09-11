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
