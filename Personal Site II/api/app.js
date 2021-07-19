const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');

const config = require('config.js');

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

mongoose
    .connect(config.db, {
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(() =>
        app.listen(8081, () => {
            console.log('Listening on PORT 8081');
        })
    )
    .catch(err => console.error(err));
