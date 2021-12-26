import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../query/movie";
import { Button, Box, Paper, Grid } from "@mui/material";
import { CreateMovieModal, MovieCard } from "../../components";
import { Movie } from "../../helpers";
import styles from "./index.module.scss";

const App: React.FC = () => {
    const { data, loading, refetch } = useQuery(getAllMovies);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    useEffect(() => {
        if (!loading) {
            setMovies(data.getAllMovies);
        }
    }, [data, loading]);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <Box className={styles.box}>
            <Paper className={styles.paper}>
                <Box mb={2}>
                    <Button variant="contained" onClick={openModal}>
                        + Add
                    </Button>
                </Box>
                <Grid container spacing={2} className={styles.grid} pt={2} pb={2}>
                    {movies.map((movie) => (
                        <Grid item xs={12} lg={6} xl={4} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <CreateMovieModal closeModal={closeModal} refetch={refetch} modalVisible={modalVisible} />
        </Box>
    );
};

export default App;
