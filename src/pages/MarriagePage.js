import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import NorrtaljeKyrka from '../resources/images/NorrtaljeKyrka.jpg';
import MapPin from '../resources/images/map-pin.svg';

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
    borderRadius: 5,
    display: 'flex',
    "@media (min-width: 1200px)": {
      height: '40vh',
    }
  },
  divider: {
    marginBottom: '15px',
    marginTop: '10px'
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '25vh',
    borderRadius: 5
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '25vh',
    borderRadius: 5,
    "&:hover": {
      cursor: "pointer"
    }
  },
  address: {
    paddingLeft: '10px'
  }
});

function MarriagePage() {
    const classes = styles();
    
    return (
      <Grid item spacing={0} container>
          <Grid item xs={12}>
            <Typography variant="h2" color="secondary" className={classes.container}>
              Vigsel
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider}/>
          </Grid>
          <Grid item xs={12} className={classes.image} />
          <Grid item xs={12}>
            <Divider className={classes.divider}/>
          </Grid>
          <Grid item xs={12} className={classes.text}>
            <Typography variant="body1" color="primary">
              Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci. Nunc volutpat, lectus et cursus varius, nunc eros pellentesque tellus, non rhoncus nibh risus nec elit. Quisque sit amet blandit quam, vel mattis tellus. Vivamus sed leo quis risus tempor vehicula. Praesent vestibulum volutpat nisl non imperdiet. Praesent cursus felis vel odio fringilla, id volutpat nibh venenatis. Cras molestie quis lacus sed pellentesque. Morbi elementum quam a blandit lobortis. Vivamus feugiat sit amet massa at porta. Cras facilisis metus eu vehicula placerat. Pellentesque at dignissim velit, ac varius ex. Donec placerat tincidunt sem at malesuada.
              <br/><br/>
              Integer quis varius nibh, quis mollis velit. Sed quam sem, interdum ac lacus a, porta egestas nisl. Donec condimentum dolor lectus, luctus finibus dui ullamcorper eget. Nulla ante turpis, accumsan vel finibus eu, luctus et sapien. Ut at ex bibendum, bibendum magna eu, finibus arcu. Etiam nisl nunc, volutpat eget metus sit amet, interdum tincidunt sem. Pellentesque nec semper magna. Donec malesuada nisl nec urna lacinia, ac commodo nibh volutpat. Nulla porttitor, nisi ac rutrum egestas, mi tortor lacinia diam, et malesuada sem sapien vel dolor.
              <br/><br/>
              Sidan uppdateras löpande med information..
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider}/>
          </Grid>
          <Grid
            item xs={12} md={3}
            className={classes.addressContainer}
            onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje//@59.7594774,18.635726,12z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m0!3e0", "_blank")}
          >
            <img 
              src={MapPin} 
              className={classes.mapPin}
              alt="Map pin"
            />
            <Typography variant="body2" color="secondary" className={classes.address}>
              <b>Norrtälje kyrka<br/>
              Kyrkogatan 4,<br/>
              761 30 Norrtälje</b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9} className={classes.mapContainer}>
            <Map lat={59.75945} lng={18.70582} />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider}/>
          </Grid>
      </Grid>
    )
}

export default MarriagePage
