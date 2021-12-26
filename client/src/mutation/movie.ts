import { gql, DocumentNode } from "@apollo/client";

export const createMovie: DocumentNode = gql`
    mutation createMovie($input: MovieInput) {
        createMovie(input: $input) {
            id
            name
            watchDate
            rating
        }
    }
`;
