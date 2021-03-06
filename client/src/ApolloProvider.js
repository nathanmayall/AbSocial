import React from 'react'
import App from './App'
import { InMemoryCache, ApolloClient, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'http://10.0.1.155:50000'
});

const authLink = setContext(() => { 
    const token = localStorage.getItem('jwtToken');
    return{
        headers: {
            Authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default ( 
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);