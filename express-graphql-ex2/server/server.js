const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()
const schema = require('./schema')
const PORT = process.env.PORT || 5000
const cors = require('cors')


app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log(`Server starter on PORT ${PORT}`) 
});