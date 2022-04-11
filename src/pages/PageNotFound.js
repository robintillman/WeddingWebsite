import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const styles = makeStyles({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '50vh'
  }
});

function PageNotFound() {
  const classes = styles();

  return (
      <Grid item xs={12} className={classes.container}>
        <Typography variant="h4" color="secondary">
            404 - Sidan finns inte
        </Typography>
      </Grid>
  )
}

export default PageNotFound
