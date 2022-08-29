import React, { useEffect, useState } from "react";
import Posts from "../../Posts/Posts.js";
import { getPosts } from "../../../actions/posts.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "../Home/Home.css";
import makeStyles from "./styles.js";
import Contact from "../Contact/Contact";
import { Paper, Divider } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ContainerSearch from "../../../SearchPage.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa101",
      contrastText: "#31525b",
    },
  },
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const HomeBusiness = () => {
  const classes = makeStyles();

  const dispatch = useDispatch();
  const query = useQuery();
  const page = query.get("page") || 1;
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts(page));
  }, [page]);

  return (
    <div className="services">
      <h2>Products</h2>
      <div className="services-container">
        <ThemeProvider theme={theme}>
          <ContainerSearch />
        </ThemeProvider>
      </div>
      <Contact />
    </div>
  );
};
