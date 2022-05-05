import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import FurusundPhoto from '../resources/images/FurusundHotel.jpg';

const styles = makeStyles({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  titleText: {
    fontSize: '60px',
    "@media (max-width: 409px)": {
        fontSize: '12vw'
    }
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${FurusundPhoto})`,
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
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  }
});

function HotelPage() {
    const classes = styles();
    
    return (
      <Grid item spacing={0} container>
        {/*Title*/}
        <Grid item xs={12} className={classes.container}>
            <Typography variant="h2" color="secondary" className={classes.titleText}>
                Boende
            </Typography>
        </Grid>

        {/*Divider*/}
        <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
        </Grid>
            
        {/*Image*/}
        <Grid item xs={12} className={classes.image} />

        {/*Boende text*/}
        <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
                Furusund Värdshus har förutom en fantastisk restaurang även ett nyrenoverat 4-stjärnigt i samma byggnad, och under bröllopskvällen är det vårt.
                <br/><br/>
                För dig som vill stanna över natten kan vi därför erbjuda övernattning inkl. frukost i något av de sexton hotellrummen till ett förmånligt pris.
                Ni anmäler intresse till oss eftersom vi abonnerat värdshuset (ni bokar alltså inte via Furusund Värdshus egen hemsida), och vi kommer sedermera att kontakta alla intresserade med förslag på pris och rum.
                Vi kommer att lägga pusslet med att tillgodose allas önskningar.
                <br/><br/>
                Skulle intresset bli så stort att alla inte får plats finns det även vandrarhem ett stenkast från värdshuset!
                <br/><br/>
                Anmäl ditt intresse senast i samband med att ni svarar om ni tänker närvara på bröllopet!
            </Typography>
        </Grid>

        {/*Divider*/}
        <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
        </Grid>
          
        {/*Info text*/}
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
            <Map lat={59.65916} lng={18.91605} />
        </Grid>
      </Grid>
    )
}


export default HotelPage;