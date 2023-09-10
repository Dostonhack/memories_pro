import React ,{useEffect}from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts'
import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import memories from "./images/memories.png";
// import useStyles from "./styles";
function App() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2">Memories</Typography>
        <img
          src={memories}
          alt="memories"
          height="4 00px"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
