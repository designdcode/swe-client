import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";

export const adminLoginVar = makeVar<boolean>(!!localStorage.getItem("admin"));
const cache: InMemoryCache = new InMemoryCache();

const httpLink = new HttpLink({
  // uri: "/graphql",
  uri: "http://localhost:4000",
  // uri: "http://ec2-15-165-19-80.ap-northeast-2.compute.amazonaws.com/graphql",
});

const errLink = onError(({ graphQLErrors, networkError }: any) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }: any) =>
      console.log("network graphql error :", message)
    );
  }
});

const linkCombine = split(({ query }) => {
  const { kind }: any = getMainDefinition(query);
  return kind === "OperationDefinition";
}, httpLink);
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: ApolloLink.from([errLink, linkCombine]),
});

export default client;
