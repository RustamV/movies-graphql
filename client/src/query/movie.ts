import { gql, DocumentNode } from "@apollo/client";

export const getAllMovies: DocumentNode = gql`
    query {
        getAllMovies {
            id
            name
            watchDate
            rating
        }
    }
`;
