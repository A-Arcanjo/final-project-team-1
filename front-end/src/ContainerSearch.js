import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper, Divider, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ChipInput from 'material-ui-chip-input';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import { useNavigate, useLocation } from 'react-router-dom';
import useStyles from './styles';
import { Pagination } from '@material-ui/lab';
import { getPostsBySearch } from '../src/actions/posts.js';



const theme = createTheme({
    palette: {
        primary: {
            main: '#ffa101',
            contrastText: '#31525b',
        },
    }
});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ContainerSearch = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            navigate(`/posts?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    };

    const handleAddChip = (tag) => setTags([...tags, tag]);

    const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));


    return (
        <Container maxWidth="xl">

            <Grow in>
                <ThemeProvider theme={theme}>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                            <Grid item xs={12} sm={6} md={9}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>

                                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                                    <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
                                    <ChipInput
                                        style={{ margin: '10px 0' }}
                                        value={tags}
                                        onAdd={(chip) => handleAddChip(chip)}
                                        onDelete={(chip) => handleDeleteChip(chip)}
                                        label="Search Tags"
                                        variant="outlined"
                                    />

                                    <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                                </AppBar>

                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                        <Divider style={{ margin: "20px 0" }} />

                        {(!searchQuery && !tags.length) && (
                            <Paper className={classes.pagination} elevation={6}>
                                <Pagination page={page} />
                            </Paper>)}





                    </Container>
                </ThemeProvider >
            </Grow>
        </Container>
    );
};

export default ContainerSearch;