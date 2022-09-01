import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
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
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  centeredTextContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '42px'
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
                Vi har förmånen att kunna erbjuda hotellrum till samtliga gäster som anmält intresse.
                <br/>
                Priset är  600 kr per gäst (inkl. hotellfrukost) och betalning sker enklast via swish till Robin (tel. 0729 77 68 74).<br/>
                Om ni har några frågor om hotellrummen, kontakta Robin eller Isabella.
                <br/><br/>
                Om ni har missat att anmäla ditt intresse eller om er situation förändrats så finns även vandrarhem ett stenkast från värdshuset!
            </Typography>
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
                Incheckning: lördag efter vigsel (tidigast 15:00)
                <br/><br/>
                Utcheckning: söndag senast 11:00 
                <br/><br/>
                Frukost: söndag 08:30 - 10:30
             </Typography>
        </Grid>


        {/*Title*/}
        <Grid item xs={12}>
            <Typography variant="h6" color="secondary" className={classes.subtitle}>
                Parkering
            </Typography>
        </Grid>
        <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
                I närheten av värdshuset finns två större betalparkeringar.
                <br/><br/>
                Laddstolpar för elbil finns på baksidan av värdshuset och här får värdshusets besökare ladda sin bil utan extra kostnad.
            </Typography>
        </Grid>

        {/*Divider*/}
        <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
        </Grid>
          
        {/*Info text*/}
        <Grid item xs={12} className={classes.centeredTextContainer}>
            <Typography variant="body1" color="primary">
            Sidan uppdateras löpande med information..
            </Typography>
        </Grid>

        {/*Divider*/}
        <Grid item xs={12}>
            <Divider style={{ background: 'black' }} className={classes.divider}/>
        </Grid>
      </Grid>
    )
}


export default HotelPage;