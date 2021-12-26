const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const port = 5000;
const app = express();
app.use(cors());

const movies = [
  {
    id: 1,
    name: "Uncut Gems",
    watchDate: "2021-12-01T19:25:57.000Z",
    rating: 8,
  },
  {
    id: 2,
    name: "Lord of the Rings",
    watchDate: "2021-12-01T19:25:57.000Z",
    rating: 10,
  },
  {
    id: 3,
    name: "Inception",
    watchDate: "2021-12-01T19:25:57.000Z",
    rating: 8,
  },
  {
    id: 4,
    name: "Possessor",
    watchDate: "2021-12-01T19:25:57.000Z",
    rating: 6,
  },
];

const rootValue = {
  getAllMovies: () => movies,
  getMovie: ({ id }) => movies.find((movie) => movie.id === id),
  createMovie: ({ input }) => {
    const movie = {
      id: Date.now(),
      name: input.name,
      watchDate: input.watchDate,
      rating: input.rating,
    };
    movies.push(movie);
    return movie;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue,
  })
);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
