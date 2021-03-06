import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import FurusundPhoto from '../resources/images/FurusundPhoto.jpg';
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
      alignItems: 'center',
  },
  titleText: {
    fontSize: '60px',
    "@media (max-width: 409px)": {
        fontSize: '12vw'
    }
  },
  subtitleText: {
    fontSize: '48px',
    "@media (max-width: 450px)": {
        fontSize: '8vw'
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
  addressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '2rem'
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
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  }
});

function DinnerPartyPage() {
    const classes = styles();
    
    return (
      <Grid item spacing={0} container>
          {/*Title*/}
          <Grid item xs={12} className={classes.container}>
            <Typography variant="h2" color="secondary" className={classes.titleText}>
              Middag & fest
            </Typography>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
          </Grid>

          {/*Image*/}
          <Grid item xs={12} className={classes.image} />

          {/*Text*/}
          <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
              Efter vigseln n??r brudparet l??mnat kyrkan tar sig alla som vill vara med under kv??llen till Furusund V??rdshus p?? eget bev??g.
              V??rdshuset ligger sk??rg??rdsidylliskt precis vid vattnet ungef??r 30min bilf??rd fr??n Norrt??lje, s?? l??ngt ut i sk??rg??rden man kommer utan b??t.
            
              <br/><br/>

              I v??rdshusets fantastiska restaurang bjuder vi p?? en 3-r??tters som vi har f??tt vara med och ta fram tillsammans med k??ket.
              Om ni har allergier eller specialkost v??nligen meddela detta senast i samband med att ni O.S.A:r.
              
              <br/><br/>

              Vill ni slippa fixa skjuts hem till kv??llen?<br/>
              V??rdshuset har ??ven ett 4-stj??rnigt hotell i samma byggnad, kika under Boende uppe i menyn om ni ??r intresserade!
            </Typography>
          </Grid>

          {/*Address*/}
          <Grid item xs={12} className={classes.addressContainer}>
            <img 
              src={MapPin}
              alt="Map pin"
              className={classes.mapPin}
              onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje/Furusund+v%C3%A4rdshus,+Furusunds+strandv%C3%A4g,+Furusund/@59.7095033,18.6491784,11z/data=!4m15!4m14!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m5!1m1!1s0x46f55c67d3175f01:0xeea7ca4380e5588b!2m2!1d18.9161299!2d59.659061!3e0!5i1", "_blank")}
            />
            <Typography
              variant="caption"
              color="secondary"
              className={classes.address}
              onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje/Furusund+v%C3%A4rdshus,+Furusunds+strandv%C3%A4g,+Furusund/@59.7095033,18.6491784,11z/data=!4m15!4m14!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m5!1m1!1s0x46f55c67d3175f01:0xeea7ca4380e5588b!2m2!1d18.9161299!2d59.659061!3e0!5i1", "_blank")}
            >
              Furusund V??rdshus<br/>
              Furusunds Strandv??g 2,<br/>
              760 19 Furusund
            </Typography>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} className={classes.divider}/>
          </Grid>

          <Grid item xs={12} className={classes.textContainer}>
            <Typography variant="body1" color="primary">
              Sidan uppdateras l??pande med information..
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


export default DinnerPartyPage;