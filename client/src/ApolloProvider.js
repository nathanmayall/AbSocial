import React from 'react'
import App from './App'
import { InMemoryCache, ApolloClient, createHttpLink, ApolloProvider } from '@apollo/client';

const httplink = createHttpLink({
    uri: 'http://10.0.1.155:50000'
});

const client = new ApolloClient({
    link: httplink,
    cache: new InMemoryCache()
});
export default (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);