import React from 'react'
import Aname from "./Aname";
import Atabs from "./Atabs";
import Alinks from "./Alinks";
import Grid from "@material-ui/core/Grid";
import Hidden from '@material-ui/core/Hidden';
 
const Con = () => {
    return (

      <Grid container spacing={8}>
      <Grid item xs={12}>
              <Alinks />
          </Grid>
          <Hidden smDown>
          <Grid item xs={12}>
              <Aname/>
          </Grid>
          <Grid item xs={12}>
              <Atabs />
          </Grid>
          </Hidden>
     
      </Grid>
      

    )
}

export default Con
