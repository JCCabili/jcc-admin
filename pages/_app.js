import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import { client } from '../utils/graphql'
import { getCurrentUser } from '../logic/user'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { CookiesProvider } from 'react-cookie'

function MyApp({ Component, 
  pageProps: {session, ...pageProps}
}) {
  return (
    <CookiesProvider>
      <ApolloProvider client={client}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
      </ApolloProvider>
    </CookiesProvider>
          )
  
}

export default MyApp


function Auth({ children }) {
  const {data, loading} = getCurrentUser();
  if (!loading) {
    if (!data) {
      window.location = "/login"
    }
  }
  return React.cloneElement(children, {currentUser: data})
}