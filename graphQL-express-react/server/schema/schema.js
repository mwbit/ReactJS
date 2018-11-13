const graphql = require('graphql');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLID
} = graphql;

const _ = require('lodash')

//mock data test
var books = [
    {name:'Book 1', genre:'Romance',id:'1',authorid: '1'},
    {name:'Book 2', genre:'Fantast',id:'2',authorid: '2'},
    {name:'Book 3', genre:'Sci-Fi',id:'3',authorid: '3'},
    {name:'Book 4', genre:'Action',id:'4',authorid: '1'},
    {name:'Book 5', genre:'itBook',id:'5',authorid: '2'}

]

var authors = [
    {name:'Author 1', age:'30',id:'1'},
    {name:'Author 2', age:'33',id:'2'},
    {name:'Author 3', age:'44',id:'3'}
]


const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id:{ type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent,args){
                return _.find(authors,{id: parent.authorid})
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id:{ type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType), 
            resolve(parent,args){
                return _.filter(books,{authorid: parent.id })
            }
        }
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
        },
        author:{
            type: AuthorType,
            args: {id: { type: GraphQLID }},
            resolve(parent,args){
                return _.find(authors,{id: args.id}) 
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})