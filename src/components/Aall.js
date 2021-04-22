import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";
import Con from "./middercon/Con";
import Aside from './sidebar/Aside'

const useStyles = makeStyles ({
    gc: {
        paddingTop:"30px",
        paddingRight:"30px",
        paddingLeft:'30px'
    }
})

export default function CenteredGrid() {
    const classes = useStyles();
  

  return (
    <div>
      <Grid container direction="column" className={classes.gc}>
        <Grid item container>

          <Grid item xs={false} sm={3}>
              <Aside />
          </Grid>
          <Grid item xs={12} sm={9}>
              <Con />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
