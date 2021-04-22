import React from 'react'
import Ga from "./Ga";
import Grid from "@material-ui/core/Grid";

const Con = () => {
    return (
      <Grid container spacing={8}>
          <Grid item xs = {12} md={6} lg={4}>
              <Ga />
          </Grid>
          <Grid item xs = {12} md={6} lg={4}>
              <Ga />
          </Grid>
          <Grid item xs = {12} md={6} lg={4}>
              <Ga />
          </Grid>
          <Grid item xs = {12} md={6} lg={4} >
              <Ga />
          </Grid>
          <Grid item xs = {12} md={6} lg={4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
          <Grid item xs = {4}>
              <Ga />
          </Grid>
      </Grid>

    )
}

export default Con
