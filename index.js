const { ApolloServer } = require('apollo-server'); 
const mongoose = require('mongoose');

const typeDefs = require('./AbSocial/graphql/typeDefs');
const resolvers = require('./AbSocial/graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: 8080 });
    })
.then(res =>  {
     console.log(`Server running at ${res.url}`)
    });