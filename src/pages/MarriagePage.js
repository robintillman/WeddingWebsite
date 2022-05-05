import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import NorrtaljeKyrka from '../resources/images/NorrtaljeKyrka.jpg';
import MapPin from '../resources/images/map-pin.svg';

const styles = makeStyles({
  textSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${NorrtaljeKyrka})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    minHeight: '25vh',
    borderRadius: 5,
    display: 'flex',
    "@media (min-width: 1200px)": {
      minHeight: '40vh',
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
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1rem'
  },
  addressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    "@media (max-width: 959px)": {
      marginTop: '1rem',
      marginBottom: '1rem',
    }
  },
  address: {
    paddingLeft: '10px',
    "&:hover": {
      cursor: "pointer"
    }
  },
  mapPin: {
    "&:hover": {
      cursor: "pointer"
    }
  },
  titleText: {
    fontSize: '60px',
    "@media (max-width: 409px)": {
        fontSize: '12vw'
    }
  }
});

function MarriagePage() {
    const classes = styles();
    
    return (
      <Grid item spacing={0} container>
          {/*Title*/}
          <Grid item xs={12} className={classes.container}>
            <Typography variant="h2" color="secondary" className={classes.titleText}>
              Vigsel
            </Typography>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
          </Grid>

          {/*Image*/}
          <Grid item xs={12} md={5} className={classes.image} />

          <Grid item xs={12} md={7} className={classes.container} container>
            {/*Text*/}
            <Grid item xs={12} className={classes.textContainer} container>
              <Grid item xs={12} className={classes.textContainer}>
                <Typography variant="h5" color="primary">
                  Norrtälje Kyrka kl 14:30 
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.textContainer}>
                <Typography variant="body1" color="primary">
                  Vi träffades i gymnasiet och vi har valt att ha vår vigsel i 
                  Norrtälje Kyrka eftersom det är den kyrka där vi hade våra skolavslutningar. 
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.textContainer}>
                <Typography variant="body1" color="primary">
                  Efter vigseln väntar brudskål, middag & fest i Furusund Värdshus dit man tar sig på eget bevåg.
                </Typography>
              </Grid>
            </Grid>
            {/*Address*/}
            <Grid item xs={12} className={classes.addressContainer}>
              <img 
                src={MapPin} 
                className={classes.mapPin}
                alt="Map pin"
                onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje//@59.7594774,18.635726,12z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m0!3e0", "_blank")}
              />
              <Typography 
                variant="caption" 
                color="secondary" 
                className={classes.address}
                onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje//@59.7594774,18.635726,12z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m0!3e0", "_blank")}
              >
                Norrtälje kyrka<br/>
                Kyrkogatan 4,<br/>
                761 30 Norrtälje
              </Typography>
            </Grid>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} className={classes.divider}/>
          </Grid>
          
          <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
              Sidan uppdateras löpande med information..
            </Typography>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} className={classes.divider}/>
          </Grid>
          
          {/*Map*/}
          <Grid item xs={12} className={classes.mapContainer}>
            <Map lat={59.75945} lng={18.70582} />
          </Grid>
      </Grid>
    )
}

export default MarriagePage
