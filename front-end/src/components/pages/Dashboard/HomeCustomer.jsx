import React, { useEffect, useState } from "react";
import Posts from "../../Posts/Posts.js";
import { getPosts } from "../../../actions/posts.js";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import useStyles from "../../../styles.js";
import { Pagination } from "@material-ui/lab";
import { Paper } from "@material-ui/core";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const HomeCustomer = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      <p>Home customer</p>
      <Posts setCurrentId={setCurrentId} />
      <Paper className={classes.pagination} elevation={6}>
        <Pagination page={page} />
      </Paper>
    </div>
  );
};