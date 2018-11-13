const graphql = require('graphql');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID
} = graphql;

const _ = require('lodash')

//mock data test
var books = [
    {name:'Book 1', genre:'Romance',id:'1'},
    {name:'Book 2', genre:'Fantast',id:'2'},
    {name:'Book 3', genre:'Sci-Fi',id:'3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id:{ type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args: {id: { type: GraphQLID }},
            resolve(parent,args){
                return _.find(books,{id: args.id}) 
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})