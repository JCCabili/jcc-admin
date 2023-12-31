import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import { client } from "../utils/graphql";

export async function login(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export async function logout(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.status === 200; // parses JSON response into native JavaScript objects
}


export const GET_CURRENT_USER = gql`
query getCurrentUser {
  ClassMethod {
    User {
      getCurrentUser {
        id
        firstName
        lastName
        middleName
        email
        username
      }
    }
  }
}
`;


export function getCurrentUser() {
  const { data, error, loading } = useQuery(GET_CURRENT_USER, {});
  if (error) {
    throw new Error(error);
  }
  return  {data: data?.ClassMethod?.User?.getCurrentUser || undefined, error, loading };
}

export async function verifyUser() {
  const { data, error } = await client.query({query: GET_CURRENT_USER});
  console.log(data)
  return  data?.ClassMethod?.User?.getCurrentUser || undefined;
}

export const GET_USERS = gql`
query Users($options: JSON, $pageCount: Int, $rowCount: Int) {
  Model {
    Users(options: $options, pageCount: $pageCount, rowCount: $rowCount) {
      pageInfo {
        endCursor
        hasNextPage
        page
        rows
      }
      totalCount
      edges {
        node {
          id
          firstName
          lastName
          middleName
          email
          username
          options
          role {
            name
          }
          displayName
        }
      }
    }
  }
}
`;


export function getUsers(options, pageCount = 0, rowCount = 25) {
  const { data, error, loading } = useQuery(GET_USERS, {variables: {options, pageCount, rowCount}});
  if (error) {
    throw new Error(error);
  }
  return  {data: data?.Model?.Users || undefined, error, loading };
}