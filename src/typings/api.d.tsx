import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AttachementInput = {
  fileName: Scalars["String"]["input"];
  url: Scalars["String"]["input"];
};

export type AttachmentType = {
  __typename?: "AttachmentType";
  fileName: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type Auth = {
  __typename?: "Auth";
  id: Scalars["String"]["output"];
  stno: Scalars["String"]["output"];
};

export type AuthReturnType = {
  __typename?: "AuthReturnType";
  data: Auth;
  success: Scalars["Boolean"]["output"];
};

export type Board = {
  __typename?: "Board";
  _id: Scalars["String"]["output"];
  category: Scalars["String"]["output"];
  comments?: Maybe<Array<Comment>>;
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  files?: Maybe<Array<AttachmentType>>;
  images?: Maybe<Array<AttachmentType>>;
  inputCreatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  private: Scalars["Boolean"]["output"];
  showAttach: Scalars["Boolean"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  writer?: Maybe<Scalars["String"]["output"]>;
};

export type BoardReturnType = {
  __typename?: "BoardReturnType";
  data: Array<Board>;
  total: Scalars["Int"]["output"];
};

export type Comment = {
  __typename?: "Comment";
  _id: Scalars["String"]["output"];
  board: Board;
  boardId: Scalars["String"]["output"];
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type CreateBoardInput = {
  category: Scalars["String"]["input"];
  content?: InputMaybe<Scalars["String"]["input"]>;
  files?: InputMaybe<Array<AttachementInput>>;
  images?: InputMaybe<Array<AttachementInput>>;
  inputCreatedAt?: Scalars["DateTime"]["input"];
  link?: InputMaybe<Scalars["String"]["input"]>;
  private?: Scalars["Boolean"]["input"];
  showAttach?: Scalars["Boolean"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateCommentInput = {
  boardId: Scalars["String"]["input"];
  content: Scalars["String"]["input"];
};

export type CreateLinkInput = {
  title?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreatePopupInput = {
  link?: InputMaybe<Scalars["String"]["input"]>;
  up?: Scalars["Boolean"]["input"];
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type Link = {
  __typename?: "Link";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

export type LinkReturnType = {
  __typename?: "LinkReturnType";
  data: Array<Link>;
  total: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBoard: Board;
  createComment: Comment;
  createLink: Link;
  createPopup: Popup;
  removeBoard: Board;
  removeComment: Comment;
  removeLink: Link;
  removePopup: Popup;
  updateBoard: Board;
  updateComment: Comment;
  updateLink: Link;
  updatePopup: Popup;
  userLogin: AuthReturnType;
};

export type MutationCreateBoardArgs = {
  args: CreateBoardInput;
};

export type MutationCreateCommentArgs = {
  args: CreateCommentInput;
};

export type MutationCreateLinkArgs = {
  args: CreateLinkInput;
};

export type MutationCreatePopupArgs = {
  args: CreatePopupInput;
};

export type MutationRemoveBoardArgs = {
  _id: Scalars["String"]["input"];
};

export type MutationRemoveCommentArgs = {
  _id: Scalars["String"]["input"];
};

export type MutationRemoveLinkArgs = {
  _id: Scalars["String"]["input"];
};

export type MutationRemovePopupArgs = {
  _id: Scalars["String"]["input"];
};

export type MutationUpdateBoardArgs = {
  args: UpdateBoardInput;
};

export type MutationUpdateCommentArgs = {
  args: UpdateCommentInput;
};

export type MutationUpdateLinkArgs = {
  args: UpdateLinkInput;
};

export type MutationUpdatePopupArgs = {
  args: UpdatePopupInput;
};

export type MutationUserLoginArgs = {
  id: Scalars["String"]["input"];
  pwd: Scalars["String"]["input"];
};

export type PaginationArgs = {
  skip?: Scalars["Int"]["input"];
  sort?: InputMaybe<SortType>;
  take?: Scalars["Int"]["input"];
};

export type Popup = {
  __typename?: "Popup";
  _id: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  up: Scalars["Boolean"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  url?: Maybe<Scalars["String"]["output"]>;
};

export type PopupReturnType = {
  __typename?: "PopupReturnType";
  data: Array<Popup>;
  total: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  board: Board;
  boards: BoardReturnType;
  link: Link;
  links: LinkReturnType;
  popup: Popup;
  popups: PopupReturnType;
};

export type QueryBoardArgs = {
  _id: Scalars["String"]["input"];
};

export type QueryBoardsArgs = {
  args?: InputMaybe<PaginationArgs>;
};

export type QueryLinkArgs = {
  _id: Scalars["String"]["input"];
};

export type QueryLinksArgs = {
  args?: InputMaybe<PaginationArgs>;
  category?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryPopupArgs = {
  _id: Scalars["String"]["input"];
};

export type QueryPopupsArgs = {
  args?: InputMaybe<PaginationArgs>;
  category?: InputMaybe<Scalars["String"]["input"]>;
};

export type SortType = {
  field: Scalars["String"]["input"];
  order: Scalars["String"]["input"];
};

export type UpdateBoardInput = {
  _id: Scalars["String"]["input"];
  category?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  files?: InputMaybe<Array<AttachementInput>>;
  images?: InputMaybe<Array<AttachementInput>>;
  inputCreatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  showAttach?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  writer?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateCommentInput = {
  _id: Scalars["String"]["input"];
  boardId?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateLinkInput = {
  _id: Scalars["String"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePopupInput = {
  _id: Scalars["String"]["input"];
  link?: InputMaybe<Scalars["String"]["input"]>;
  up?: InputMaybe<Scalars["Boolean"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateBoardMutationVariables = Exact<{
  args: CreateBoardInput;
}>;

export type CreateBoardMutation = {
  __typename?: "Mutation";
  createBoard: {
    __typename?: "Board";
    title?: string | null;
    content?: string | null;
    writer?: string | null;
    category: string;
    type?: string | null;
    link?: string | null;
    private: boolean;
    showAttach: boolean;
    inputCreatedAt?: any | null;
    createdAt: any;
    updatedAt: any;
    files?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
    images?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
  };
};

export type UpdateBoardMutationVariables = Exact<{
  args: UpdateBoardInput;
}>;

export type UpdateBoardMutation = {
  __typename?: "Mutation";
  updateBoard: {
    __typename?: "Board";
    _id: string;
    title?: string | null;
    content?: string | null;
    writer?: string | null;
    category: string;
    type?: string | null;
    link?: string | null;
    private: boolean;
    showAttach: boolean;
    inputCreatedAt?: any | null;
    createdAt: any;
    updatedAt: any;
    files?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
    images?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
  };
};

export type RemoveBoardMutationVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type RemoveBoardMutation = {
  __typename?: "Mutation";
  removeBoard: { __typename?: "Board"; _id: string };
};

export type CreateCommentMutationVariables = Exact<{
  args: CreateCommentInput;
}>;

export type CreateCommentMutation = {
  __typename?: "Mutation";
  createComment: { __typename?: "Comment"; content: string; boardId: string };
};

export type UpdateCommentMutationVariables = Exact<{
  args: UpdateCommentInput;
}>;

export type UpdateCommentMutation = {
  __typename?: "Mutation";
  updateComment: {
    __typename?: "Comment";
    _id: string;
    content: string;
    boardId: string;
  };
};

export type RemoveCommentMutationVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type RemoveCommentMutation = {
  __typename?: "Mutation";
  removeComment: { __typename?: "Comment"; _id: string };
};

export type CreatePopupMutationVariables = Exact<{
  args: CreatePopupInput;
}>;

export type CreatePopupMutation = {
  __typename?: "Mutation";
  createPopup: {
    __typename?: "Popup";
    url?: string | null;
    link?: string | null;
    up: boolean;
  };
};

export type UpdatePopupMutationVariables = Exact<{
  args: UpdatePopupInput;
}>;

export type UpdatePopupMutation = {
  __typename?: "Mutation";
  updatePopup: {
    __typename?: "Popup";
    _id: string;
    url?: string | null;
    link?: string | null;
    up: boolean;
  };
};

export type RemovePopupMutationVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type RemovePopupMutation = {
  __typename?: "Mutation";
  removePopup: {
    __typename?: "Popup";
    _id: string;
    url?: string | null;
    link?: string | null;
    up: boolean;
  };
};

export type CreateLinkMutationVariables = Exact<{
  args: CreateLinkInput;
}>;

export type CreateLinkMutation = {
  __typename?: "Mutation";
  createLink: { __typename?: "Link"; url: string; title: string };
};

export type UpdateLinkMutationVariables = Exact<{
  args: UpdateLinkInput;
}>;

export type UpdateLinkMutation = {
  __typename?: "Mutation";
  updateLink: { __typename?: "Link"; _id: string; url: string; title: string };
};

export type RemoveLinkMutationVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type RemoveLinkMutation = {
  __typename?: "Mutation";
  removeLink: { __typename?: "Link"; _id: string };
};

export type UserLoginMutationVariables = Exact<{
  id: Scalars["String"]["input"];
  pwd: Scalars["String"]["input"];
}>;

export type UserLoginMutation = {
  __typename?: "Mutation";
  userLogin: {
    __typename?: "AuthReturnType";
    success: boolean;
    data: { __typename?: "Auth"; id: string; stno: string };
  };
};

export type BoardsQueryVariables = Exact<{
  args?: InputMaybe<PaginationArgs>;
}>;

export type BoardsQuery = {
  __typename?: "Query";
  boards: {
    __typename?: "BoardReturnType";
    total: number;
    data: Array<{
      __typename?: "Board";
      _id: string;
      title?: string | null;
      content?: string | null;
      writer?: string | null;
      category: string;
      type?: string | null;
      link?: string | null;
      private: boolean;
      showAttach: boolean;
      inputCreatedAt?: any | null;
      createdAt: any;
      updatedAt: any;
      files?: Array<{
        __typename?: "AttachmentType";
        url: string;
        fileName: string;
      }> | null;
      images?: Array<{
        __typename?: "AttachmentType";
        url: string;
        fileName: string;
      }> | null;
      comments?: Array<{
        __typename?: "Comment";
        _id: string;
        content: string;
        boardId: string;
        createdAt: any;
      }> | null;
    }>;
  };
};

export type BoardQueryVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type BoardQuery = {
  __typename?: "Query";
  board: {
    __typename?: "Board";
    _id: string;
    title?: string | null;
    content?: string | null;
    writer?: string | null;
    category: string;
    type?: string | null;
    link?: string | null;
    private: boolean;
    showAttach: boolean;
    inputCreatedAt?: any | null;
    createdAt: any;
    updatedAt: any;
    files?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
    images?: Array<{
      __typename?: "AttachmentType";
      url: string;
      fileName: string;
    }> | null;
    comments?: Array<{
      __typename?: "Comment";
      _id: string;
      content: string;
      boardId: string;
      createdAt: any;
    }> | null;
  };
};

export type PopupsQueryVariables = Exact<{
  args?: InputMaybe<PaginationArgs>;
  category?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type PopupsQuery = {
  __typename?: "Query";
  popups: {
    __typename?: "PopupReturnType";
    total: number;
    data: Array<{
      __typename?: "Popup";
      _id: string;
      url?: string | null;
      link?: string | null;
      up: boolean;
      createdAt: any;
    }>;
  };
};

export type PopupQueryVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type PopupQuery = {
  __typename?: "Query";
  popup: {
    __typename?: "Popup";
    _id: string;
    url?: string | null;
    link?: string | null;
    up: boolean;
    createdAt: any;
  };
};

export type LinksQueryVariables = Exact<{
  args?: InputMaybe<PaginationArgs>;
  category?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type LinksQuery = {
  __typename?: "Query";
  links: {
    __typename?: "LinkReturnType";
    total: number;
    data: Array<{
      __typename?: "Link";
      _id: string;
      url: string;
      title: string;
      createdAt: any;
    }>;
  };
};

export type InkQueryVariables = Exact<{
  _id: Scalars["String"]["input"];
}>;

export type InkQuery = {
  __typename?: "Query";
  link: {
    __typename?: "Link";
    _id: string;
    url: string;
    title: string;
    createdAt: any;
  };
};

export const CreateBoardDocument = gql`
  mutation createBoard($args: CreateBoardInput!) {
    createBoard(args: $args) {
      title
      content
      writer
      category
      type
      link
      private
      showAttach
      inputCreatedAt
      files {
        url
        fileName
      }
      images {
        url
        fileName
      }
      createdAt
      updatedAt
    }
  }
`;
export type CreateBoardMutationFn = Apollo.MutationFunction<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBoardMutation,
    CreateBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(
    CreateBoardDocument,
    options
  );
}
export type CreateBoardMutationHookResult = ReturnType<
  typeof useCreateBoardMutation
>;
export type CreateBoardMutationResult =
  Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;
export const UpdateBoardDocument = gql`
  mutation updateBoard($args: UpdateBoardInput!) {
    updateBoard(args: $args) {
      _id
      title
      content
      writer
      category
      type
      link
      private
      showAttach
      inputCreatedAt
      files {
        url
        fileName
      }
      images {
        url
        fileName
      }
      createdAt
      updatedAt
    }
  }
`;
export type UpdateBoardMutationFn = Apollo.MutationFunction<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(
    UpdateBoardDocument,
    options
  );
}
export type UpdateBoardMutationHookResult = ReturnType<
  typeof useUpdateBoardMutation
>;
export type UpdateBoardMutationResult =
  Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;
export const RemoveBoardDocument = gql`
  mutation removeBoard($_id: String!) {
    removeBoard(_id: $_id) {
      _id
    }
  }
`;
export type RemoveBoardMutationFn = Apollo.MutationFunction<
  RemoveBoardMutation,
  RemoveBoardMutationVariables
>;

/**
 * __useRemoveBoardMutation__
 *
 * To run a mutation, you first call `useRemoveBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBoardMutation, { data, loading, error }] = useRemoveBoardMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveBoardMutation,
    RemoveBoardMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveBoardMutation, RemoveBoardMutationVariables>(
    RemoveBoardDocument,
    options
  );
}
export type RemoveBoardMutationHookResult = ReturnType<
  typeof useRemoveBoardMutation
>;
export type RemoveBoardMutationResult =
  Apollo.MutationResult<RemoveBoardMutation>;
export type RemoveBoardMutationOptions = Apollo.BaseMutationOptions<
  RemoveBoardMutation,
  RemoveBoardMutationVariables
>;
export const CreateCommentDocument = gql`
  mutation createComment($args: CreateCommentInput!) {
    createComment(args: $args) {
      content
      boardId
    }
  }
`;
export type CreateCommentMutationFn = Apollo.MutationFunction<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(CreateCommentDocument, options);
}
export type CreateCommentMutationHookResult = ReturnType<
  typeof useCreateCommentMutation
>;
export type CreateCommentMutationResult =
  Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<
  CreateCommentMutation,
  CreateCommentMutationVariables
>;
export const UpdateCommentDocument = gql`
  mutation updateComment($args: UpdateCommentInput!) {
    updateComment(args: $args) {
      _id
      content
      boardId
    }
  }
`;
export type UpdateCommentMutationFn = Apollo.MutationFunction<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCommentMutation,
    UpdateCommentMutationVariables
  >(UpdateCommentDocument, options);
}
export type UpdateCommentMutationHookResult = ReturnType<
  typeof useUpdateCommentMutation
>;
export type UpdateCommentMutationResult =
  Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<
  UpdateCommentMutation,
  UpdateCommentMutationVariables
>;
export const RemoveCommentDocument = gql`
  mutation removeComment($_id: String!) {
    removeComment(_id: $_id) {
      _id
    }
  }
`;
export type RemoveCommentMutationFn = Apollo.MutationFunction<
  RemoveCommentMutation,
  RemoveCommentMutationVariables
>;

/**
 * __useRemoveCommentMutation__
 *
 * To run a mutation, you first call `useRemoveCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentMutation, { data, loading, error }] = useRemoveCommentMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveCommentMutation,
    RemoveCommentMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RemoveCommentMutation,
    RemoveCommentMutationVariables
  >(RemoveCommentDocument, options);
}
export type RemoveCommentMutationHookResult = ReturnType<
  typeof useRemoveCommentMutation
>;
export type RemoveCommentMutationResult =
  Apollo.MutationResult<RemoveCommentMutation>;
export type RemoveCommentMutationOptions = Apollo.BaseMutationOptions<
  RemoveCommentMutation,
  RemoveCommentMutationVariables
>;
export const CreatePopupDocument = gql`
  mutation createPopup($args: CreatePopupInput!) {
    createPopup(args: $args) {
      url
      link
      up
    }
  }
`;
export type CreatePopupMutationFn = Apollo.MutationFunction<
  CreatePopupMutation,
  CreatePopupMutationVariables
>;

/**
 * __useCreatePopupMutation__
 *
 * To run a mutation, you first call `useCreatePopupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePopupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPopupMutation, { data, loading, error }] = useCreatePopupMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreatePopupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePopupMutation,
    CreatePopupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePopupMutation, CreatePopupMutationVariables>(
    CreatePopupDocument,
    options
  );
}
export type CreatePopupMutationHookResult = ReturnType<
  typeof useCreatePopupMutation
>;
export type CreatePopupMutationResult =
  Apollo.MutationResult<CreatePopupMutation>;
export type CreatePopupMutationOptions = Apollo.BaseMutationOptions<
  CreatePopupMutation,
  CreatePopupMutationVariables
>;
export const UpdatePopupDocument = gql`
  mutation updatePopup($args: UpdatePopupInput!) {
    updatePopup(args: $args) {
      _id
      url
      link
      up
    }
  }
`;
export type UpdatePopupMutationFn = Apollo.MutationFunction<
  UpdatePopupMutation,
  UpdatePopupMutationVariables
>;

/**
 * __useUpdatePopupMutation__
 *
 * To run a mutation, you first call `useUpdatePopupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePopupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePopupMutation, { data, loading, error }] = useUpdatePopupMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdatePopupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePopupMutation,
    UpdatePopupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdatePopupMutation, UpdatePopupMutationVariables>(
    UpdatePopupDocument,
    options
  );
}
export type UpdatePopupMutationHookResult = ReturnType<
  typeof useUpdatePopupMutation
>;
export type UpdatePopupMutationResult =
  Apollo.MutationResult<UpdatePopupMutation>;
export type UpdatePopupMutationOptions = Apollo.BaseMutationOptions<
  UpdatePopupMutation,
  UpdatePopupMutationVariables
>;
export const RemovePopupDocument = gql`
  mutation removePopup($_id: String!) {
    removePopup(_id: $_id) {
      _id
      url
      link
      up
    }
  }
`;
export type RemovePopupMutationFn = Apollo.MutationFunction<
  RemovePopupMutation,
  RemovePopupMutationVariables
>;

/**
 * __useRemovePopupMutation__
 *
 * To run a mutation, you first call `useRemovePopupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePopupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePopupMutation, { data, loading, error }] = useRemovePopupMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemovePopupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemovePopupMutation,
    RemovePopupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemovePopupMutation, RemovePopupMutationVariables>(
    RemovePopupDocument,
    options
  );
}
export type RemovePopupMutationHookResult = ReturnType<
  typeof useRemovePopupMutation
>;
export type RemovePopupMutationResult =
  Apollo.MutationResult<RemovePopupMutation>;
export type RemovePopupMutationOptions = Apollo.BaseMutationOptions<
  RemovePopupMutation,
  RemovePopupMutationVariables
>;
export const CreateLinkDocument = gql`
  mutation createLink($args: CreateLinkInput!) {
    createLink(args: $args) {
      url
      title
    }
  }
`;
export type CreateLinkMutationFn = Apollo.MutationFunction<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;

/**
 * __useCreateLinkMutation__
 *
 * To run a mutation, you first call `useCreateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLinkMutation, { data, loading, error }] = useCreateLinkMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLinkMutation,
    CreateLinkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLinkMutation, CreateLinkMutationVariables>(
    CreateLinkDocument,
    options
  );
}
export type CreateLinkMutationHookResult = ReturnType<
  typeof useCreateLinkMutation
>;
export type CreateLinkMutationResult =
  Apollo.MutationResult<CreateLinkMutation>;
export type CreateLinkMutationOptions = Apollo.BaseMutationOptions<
  CreateLinkMutation,
  CreateLinkMutationVariables
>;
export const UpdateLinkDocument = gql`
  mutation updateLink($args: UpdateLinkInput!) {
    updateLink(args: $args) {
      _id
      url
      title
    }
  }
`;
export type UpdateLinkMutationFn = Apollo.MutationFunction<
  UpdateLinkMutation,
  UpdateLinkMutationVariables
>;

/**
 * __useUpdateLinkMutation__
 *
 * To run a mutation, you first call `useUpdateLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLinkMutation, { data, loading, error }] = useUpdateLinkMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useUpdateLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLinkMutation,
    UpdateLinkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateLinkMutation, UpdateLinkMutationVariables>(
    UpdateLinkDocument,
    options
  );
}
export type UpdateLinkMutationHookResult = ReturnType<
  typeof useUpdateLinkMutation
>;
export type UpdateLinkMutationResult =
  Apollo.MutationResult<UpdateLinkMutation>;
export type UpdateLinkMutationOptions = Apollo.BaseMutationOptions<
  UpdateLinkMutation,
  UpdateLinkMutationVariables
>;
export const RemoveLinkDocument = gql`
  mutation removeLink($_id: String!) {
    removeLink(_id: $_id) {
      _id
    }
  }
`;
export type RemoveLinkMutationFn = Apollo.MutationFunction<
  RemoveLinkMutation,
  RemoveLinkMutationVariables
>;

/**
 * __useRemoveLinkMutation__
 *
 * To run a mutation, you first call `useRemoveLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLinkMutation, { data, loading, error }] = useRemoveLinkMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveLinkMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveLinkMutation,
    RemoveLinkMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveLinkMutation, RemoveLinkMutationVariables>(
    RemoveLinkDocument,
    options
  );
}
export type RemoveLinkMutationHookResult = ReturnType<
  typeof useRemoveLinkMutation
>;
export type RemoveLinkMutationResult =
  Apollo.MutationResult<RemoveLinkMutation>;
export type RemoveLinkMutationOptions = Apollo.BaseMutationOptions<
  RemoveLinkMutation,
  RemoveLinkMutationVariables
>;
export const UserLoginDocument = gql`
  mutation userLogin($id: String!, $pwd: String!) {
    userLogin(id: $id, pwd: $pwd) {
      success
      data {
        id
        stno
      }
    }
  }
`;
export type UserLoginMutationFn = Apollo.MutationFunction<
  UserLoginMutation,
  UserLoginMutationVariables
>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      id: // value for 'id'
 *      pwd: // value for 'pwd'
 *   },
 * });
 */
export function useUserLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserLoginMutation,
    UserLoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(
    UserLoginDocument,
    options
  );
}
export type UserLoginMutationHookResult = ReturnType<
  typeof useUserLoginMutation
>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<
  UserLoginMutation,
  UserLoginMutationVariables
>;
export const BoardsDocument = gql`
  query boards($args: PaginationArgs) {
    boards(args: $args) {
      data {
        _id
        title
        content
        writer
        category
        type
        link
        private
        showAttach
        inputCreatedAt
        files {
          url
          fileName
        }
        images {
          url
          fileName
        }
        createdAt
        updatedAt
        comments {
          _id
          content
          boardId
          createdAt
        }
      }
      total
    }
  }
`;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useBoardsQuery(
  baseOptions?: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(
    BoardsDocument,
    options
  );
}
export function useBoardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(
    BoardsDocument,
    options
  );
}
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsQueryResult = Apollo.QueryResult<
  BoardsQuery,
  BoardsQueryVariables
>;
export const BoardDocument = gql`
  query board($_id: String!) {
    board(_id: $_id) {
      _id
      title
      content
      writer
      category
      type
      link
      private
      showAttach
      inputCreatedAt
      files {
        url
        fileName
      }
      images {
        url
        fileName
      }
      createdAt
      updatedAt
      comments {
        _id
        content
        boardId
        createdAt
      }
    }
  }
`;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useBoardQuery(
  baseOptions: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BoardQuery, BoardQueryVariables>(
    BoardDocument,
    options
  );
}
export function useBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(
    BoardDocument,
    options
  );
}
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardQueryResult = Apollo.QueryResult<
  BoardQuery,
  BoardQueryVariables
>;
export const PopupsDocument = gql`
  query popups($args: PaginationArgs, $category: String) {
    popups(args: $args, category: $category) {
      data {
        _id
        url
        link
        up
        createdAt
      }
      total
    }
  }
`;

/**
 * __usePopupsQuery__
 *
 * To run a query within a React component, call `usePopupsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopupsQuery({
 *   variables: {
 *      args: // value for 'args'
 *      category: // value for 'category'
 *   },
 * });
 */
export function usePopupsQuery(
  baseOptions?: Apollo.QueryHookOptions<PopupsQuery, PopupsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PopupsQuery, PopupsQueryVariables>(
    PopupsDocument,
    options
  );
}
export function usePopupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PopupsQuery, PopupsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PopupsQuery, PopupsQueryVariables>(
    PopupsDocument,
    options
  );
}
export type PopupsQueryHookResult = ReturnType<typeof usePopupsQuery>;
export type PopupsLazyQueryHookResult = ReturnType<typeof usePopupsLazyQuery>;
export type PopupsQueryResult = Apollo.QueryResult<
  PopupsQuery,
  PopupsQueryVariables
>;
export const PopupDocument = gql`
  query popup($_id: String!) {
    popup(_id: $_id) {
      _id
      url
      link
      up
      createdAt
    }
  }
`;

/**
 * __usePopupQuery__
 *
 * To run a query within a React component, call `usePopupQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopupQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function usePopupQuery(
  baseOptions: Apollo.QueryHookOptions<PopupQuery, PopupQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PopupQuery, PopupQueryVariables>(
    PopupDocument,
    options
  );
}
export function usePopupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PopupQuery, PopupQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PopupQuery, PopupQueryVariables>(
    PopupDocument,
    options
  );
}
export type PopupQueryHookResult = ReturnType<typeof usePopupQuery>;
export type PopupLazyQueryHookResult = ReturnType<typeof usePopupLazyQuery>;
export type PopupQueryResult = Apollo.QueryResult<
  PopupQuery,
  PopupQueryVariables
>;
export const LinksDocument = gql`
  query links($args: PaginationArgs, $category: String) {
    links(args: $args, category: $category) {
      data {
        _id
        url
        title
        createdAt
      }
      total
    }
  }
`;

/**
 * __useLinksQuery__
 *
 * To run a query within a React component, call `useLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLinksQuery({
 *   variables: {
 *      args: // value for 'args'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useLinksQuery(
  baseOptions?: Apollo.QueryHookOptions<LinksQuery, LinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LinksQuery, LinksQueryVariables>(
    LinksDocument,
    options
  );
}
export function useLinksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LinksQuery, LinksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LinksQuery, LinksQueryVariables>(
    LinksDocument,
    options
  );
}
export type LinksQueryHookResult = ReturnType<typeof useLinksQuery>;
export type LinksLazyQueryHookResult = ReturnType<typeof useLinksLazyQuery>;
export type LinksQueryResult = Apollo.QueryResult<
  LinksQuery,
  LinksQueryVariables
>;
export const InkDocument = gql`
  query ink($_id: String!) {
    link(_id: $_id) {
      _id
      url
      title
      createdAt
    }
  }
`;

/**
 * __useInkQuery__
 *
 * To run a query within a React component, call `useInkQuery` and pass it any options that fit your needs.
 * When your component renders, `useInkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInkQuery({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useInkQuery(
  baseOptions: Apollo.QueryHookOptions<InkQuery, InkQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<InkQuery, InkQueryVariables>(InkDocument, options);
}
export function useInkLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<InkQuery, InkQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<InkQuery, InkQueryVariables>(InkDocument, options);
}
export type InkQueryHookResult = ReturnType<typeof useInkQuery>;
export type InkLazyQueryHookResult = ReturnType<typeof useInkLazyQuery>;
export type InkQueryResult = Apollo.QueryResult<InkQuery, InkQueryVariables>;
