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
  uri: "http://localhost:4000/graphql",
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
