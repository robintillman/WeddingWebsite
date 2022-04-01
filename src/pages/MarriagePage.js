import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import Map from '../components/Map/Map';
import NorrtaljeKyrka from '../NorrtaljeKyrka.jpg';

const styles = makeStyles({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${NorrtaljeKyrka})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '25vh',
    width: '100%',
    borderRadius: 5,
    display: 'flex'
  },
  text: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

function MarriagePage() {
    const classes = styles();
    
    return (
      <Grid item spacing={5} container>
          <Grid item xs={12} className={classes.image} />
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.container}>
                Vigsel
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.text}>
            <p>
            Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci. Nunc volutpat, lectus et cursus varius, nunc eros pellentesque tellus, non rhoncus nibh risus nec elit. Quisque sit amet blandit quam, vel mattis tellus. Vivamus sed leo quis risus tempor vehicula. Praesent vestibulum volutpat nisl non imperdiet. Praesent cursus felis vel odio fringilla, id volutpat nibh venenatis. Cras molestie quis lacus sed pellentesque. Morbi elementum quam a blandit lobortis. Vivamus feugiat sit amet massa at porta. Cras facilisis metus eu vehicula placerat. Pellentesque at dignissim velit, ac varius ex. Donec placerat tincidunt sem at malesuada.
            <br/><br/>
            Integer quis varius nibh, quis mollis velit. Sed quam sem, interdum ac lacus a, porta egestas nisl. Donec condimentum dolor lectus, luctus finibus dui ullamcorper eget. Nulla ante turpis, accumsan vel finibus eu, luctus et sapien. Ut at ex bibendum, bibendum magna eu, finibus arcu. Etiam nisl nunc, volutpat eget metus sit amet, interdum tincidunt sem. Pellentesque nec semper magna. Donec malesuada nisl nec urna lacinia, ac commodo nibh volutpat. Nulla porttitor, nisi ac rutrum egestas, mi tortor lacinia diam, et malesuada sem sapien vel dolor.
            <br/><br/>
            Mer information kommer längre fram..
            </p>
          </Grid>
          <Grid item xs={12} className={classes.map}>
            <Map lat={59.65916} lng={18.91605} />
          </Grid>
      </Grid>
    )
}

export default MarriagePage
