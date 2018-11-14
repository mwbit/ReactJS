const express = require('express');
const graphqlHTTP = require('express-graphql')
const mongo = process.env.MONGODB || 'mongodb://localhost:27017/graphql-test'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const cors = require('cors')

const schema = require('./schema/schema')

const app = express();

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose
    .connect(mongo,{ useNewUrlParser: true })
    .then(() => {
        app.listen(4000, () => {
            console.log('listening on port 4000')
        });
    })
    .catch(e => {
        console.log(e)
    })

