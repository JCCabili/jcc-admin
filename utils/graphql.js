import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const GRAPHQL_URL = 'http://localhost:7080/graphql.api';

const link = createHttpLink({
  uri: GRAPHQL_URL,
  credentials: 'include'
});



export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});