import { Container, Grid, MenuItem, IconButton, InputAdornment, TextField } from '@mui/material';
import Logo from '../logo/Logo';
import styles from "../header/Header.module.scss";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (

        <div className={styles.wrapper} >
            <Container className={styles.container}>
                <Grid item xs={6}>
                    <Logo></Logo>
                </Grid>
                <Grid item xs={8}  >

                    <TextField
                        placeholder='Find items, users and activities'
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                '& fieldset': {

                                },
                                '& input': {
                                    padding: '8px 3px',
                                    color: '#ffffff'
                                },
                            },
                        }}
                        InputProps={{
                            className: styles.item,
                            startAdornment: (
                                <InputAdornment >
                                    <IconButton >
                                        <SearchIcon className={styles.icon}></SearchIcon>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={12} className={styles.menu}>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Activity</MenuItem>
                    <MenuItem>EXPLORE</MenuItem>
                </Grid>
            </Container>
        </div>
    )
}