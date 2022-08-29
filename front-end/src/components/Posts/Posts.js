import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux'; //fetch the data from that global redux store
import Post from './Post/Post.js';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const { posts, isLoading } = useSelector((state) => state.posts); //initialize as a Hook , posts from reducers
    const classes = useStyles();

    if (!posts.length && !isLoading) return 'No posts'; //if it is not post.length and it is not isLoading returns "No posts"
    return (
        isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>

                {posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} /> /post drilling, send the same props over and over to the most child component
                    </Grid>
                ))}
            </Grid>


        )

    );

};

export default Posts;