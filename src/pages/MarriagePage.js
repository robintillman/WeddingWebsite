import React from 'react';

import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

import NorrtaljeKyrka from '../NorrtaljeKyrka.jpg';

const styles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    maxHeight: '100%'
  }
})

function MarriagePage() {
  const classes = styles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={classes.container}>
          <img src={NorrtaljeKyrka} className={classes.container}/>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.container}>
        Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci. Nunc volutpat, lectus et cursus varius, nunc eros pellentesque tellus, non rhoncus nibh risus nec elit. Quisque sit amet blandit quam, vel mattis tellus. Vivamus sed leo quis risus tempor vehicula. Praesent vestibulum volutpat nisl non imperdiet. Praesent cursus felis vel odio fringilla, id volutpat nibh venenatis. Cras molestie quis lacus sed pellentesque. Morbi elementum quam a blandit lobortis. Vivamus feugiat sit amet massa at porta. Cras facilisis metus eu vehicula placerat. Pellentesque at dignissim velit, ac varius ex. Donec placerat tincidunt sem at malesuada.

        Integer quis varius nibh, quis mollis velit. Sed quam sem, interdum ac lacus a, porta egestas nisl. Donec condimentum dolor lectus, luctus finibus dui ullamcorper eget. Nulla ante turpis, accumsan vel finibus eu, luctus et sapien. Ut at ex bibendum, bibendum magna eu, finibus arcu. Etiam nisl nunc, volutpat eget metus sit amet, interdum tincidunt sem. Pellentesque nec semper magna. Donec malesuada nisl nec urna lacinia, ac commodo nibh volutpat. Nulla porttitor, nisi ac rutrum egestas, mi tortor lacinia diam, et malesuada sem sapien vel dolor.
        </Paper>
      </Grid>
    </Grid>
  )
}

export default MarriagePage
