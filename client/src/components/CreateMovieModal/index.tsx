import { useMutation } from "@apollo/client";
import { useState } from "react";
import { createMovie } from "../../mutation/movie";
import { Button, Box, TextField, Modal, Typography, TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/lab";
import dayjs from "dayjs";
import styles from "./index.module.scss";

interface Props {
    modalVisible: boolean;
    refetch: () => void;
    closeModal: () => void;
}

const CreateMovieModal: React.FC<Props> = ({ modalVisible, refetch, closeModal }) => {
    const [createNewUser] = useMutation(createMovie);
    const [name, setName] = useState<string>("");
    const [watchDate, setWatchDate] = useState<dayjs.Dayjs | null>(null);
    const [rating, setRating] = useState<string>("");

    const addUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        createNewUser({
            variables: {
                input: {
                    name,
                    watchDate: watchDate,
                    rating: +rating
                }
            }
        }).then(() => {
            clearInputs();
            refetch();
        });
    };

    const onChangeDate = (date: dayjs.Dayjs | null) => {
        setWatchDate(date);
    };

    const onChangeRating = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setRating(e.target.value);
    };

    const onChangeName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setName(e.target.value);
    };

    const clearInputs = () => {
        setName("");
        setWatchDate(null);
        setRating("");
    };

    const onCloseModal = () => {
        closeModal();
        clearInputs();
    };

    return (
        <Modal
            open={modalVisible}
            onClose={onCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className={styles.modalBox}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add watched movie
                </Typography>
                <form>
                    <TextField label="name" value={name} onChange={onChangeName} margin="normal" fullWidth />
                    <DatePicker
                        label="watchDate"
                        value={watchDate}
                        onChange={onChangeDate}
                        renderInput={(props: TextFieldProps) => <TextField {...props} margin="normal" fullWidth />}
                    />
                    <TextField label="rating" value={rating} onChange={onChangeRating} margin="normal" fullWidth />
                    <Box mt={2}>
                        <Button variant="contained" onClick={addUser}>
                            Add
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default CreateMovieModal;
