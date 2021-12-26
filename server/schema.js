const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Movie {
        id: ID
        watchDate: String
        name: String
        rating: Int
    }

    input MovieInput {
        id: ID
        watchDate: String!
        name: String!
        rating: Int!
    }

    type Query {
        getAllMovies: [Movie]
        getMovie(id: ID): Movie
    }

    type Mutation {
        createMovie(input: MovieInput): Movie
        editMovie(input: MovieInput): Movie
        deleteMovie(input: MovieInput): Movie
    }
`);

module.exports = schema;
