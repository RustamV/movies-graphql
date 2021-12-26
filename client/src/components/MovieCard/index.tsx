import { Card, Typography } from "@mui/material";
import { Movie } from "../../helpers";
import dayjs from "dayjs";
import styles from "./index.module.scss";

interface Props {
    movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <Card className={styles.card}>
            <Typography variant="h5">{movie.name}</Typography>
            <Typography variant="subtitle1">Date: {dayjs(movie.watchDate).format("DD/MM/YYYY")}</Typography>
            <Typography variant="caption">Rating: {movie.rating}/10</Typography>
        </Card>
    );
};

export default MovieCard;
