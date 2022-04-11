import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import FurusundPhoto from '../resources/images/FurusundPhoto.jpg';
import MapPin from '../resources/images/map-pin.svg';
import RobertImage from '../resources/images/img_avatar.png';
import SophiaImage from '../resources/images/img_avatar2.png';
import EmailImage from '../resources/images/email_black.svg';

const styles = makeStyles({
  textSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  titleContainer: {
      display: 'flex',
      justifyContent: 'center'
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
    marginBottom: '2rem',
    "&:hover": {
      cursor: "pointer"
    }
  },
  address: {
    paddingLeft: '10px'
  },
  textTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  profileImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15vw',
    borderRadius: '50%',
    marginTop: '1rem',
    "@media (max-width: 959px)": {
      width: '30vw',
    },
    "@media (max-width: 500px)": {
      width: '40vw',
    }
  }
});

function DinnerPartyPage() {
    const classes = styles();
    
    return (
      <Grid item spacing={0} container>
          {/*Title*/}
          <Grid item xs={12} className={classes.titleContainer}>
            <Typography variant="h2" color="secondary" className={classes.container}>
              Middag & fest
            </Typography>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
          </Grid>

          {/*Furusund Värdshus*/}
          <Grid container className={classes.textSection}>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="h3" color="primary" className={classes.textTitle}>
                Furusund Värdshus
              </Typography>
            </Grid>
            
            {/*Image*/}
            <Grid item xs={12} className={classes.image} />

            {/*Text*/}
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="body1" color="primary">
                Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
              </Typography>
            </Grid>

            {/*Address*/}
            <Grid
              item xs={12}
              className={classes.addressContainer}
              onClick={()=> window.open("https://www.google.com/maps/dir/Norrt%C3%A4lje+kyrka,+Kyrkogatan,+Norrt%C3%A4lje/Furusund+v%C3%A4rdshus,+Furusunds+strandv%C3%A4g,+Furusund/@59.7095033,18.6491784,11z/data=!4m15!4m14!1m5!1m1!1s0x465ff64ccb53ae73:0x9cc58a1d76853197!2m2!1d18.705821!2d59.7594125!1m5!1m1!1s0x46f55c67d3175f01:0xeea7ca4380e5588b!2m2!1d18.9161299!2d59.659061!3e0!5i1", "_blank")}
            >
              <img 
                src={MapPin}
                alt="Map pin"
                className={classes.mapPin}
              />
              <Typography variant="caption" color="secondary" className={classes.address}>
                Furusund Värdshus<br/>
                Furusunds Strandväg 2,<br/>
                760 19 Furusund
              </Typography>
            </Grid>

            {/*Text*/}
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="body1" color="primary">
                Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
              </Typography>
            </Grid>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
          </Grid>

          {/*Toastmaster & Toastmadame*/}
          <Grid container className={classes.textSection}>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="h3" color="primary" className={classes.textTitle}>
                Toastmadame & toastmaster
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="body1" color="primary">
                Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
              </Typography>
            </Grid>

            {/*Toastmaster & Toastmadame - Profiles*/}
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} container>
                <Grid item xs={12} className={classes.profileImage}>
                  <img 
                    src={SophiaImage}
                    alt="Sophia"
                    className={classes.profileImage}
                  />
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography variant="h4" color="primary" className={classes.textTitle}>
                    Sophia
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography variant="body1" color="primary">
                    Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} container>
                <Grid item xs={12} className={classes.profileImage}>
                  <img 
                    src={RobertImage}
                    alt="Robert"
                    className={classes.profileImage}
                  />
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography variant="h4" color="primary" className={classes.textTitle}>
                    Robert
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography variant="body1" color="primary">
                    Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
                <Typography variant="h4" color="primary">
                  Föranmäl tal
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
                <img
                  src={EmailImage}
                  alt="E-post"
                  style={{ width: 40, height: 40 }}
                  onClick={()=> window.open("mailto:robin.tillman92@gmail.com", "_blank")}
                />
            </Grid>
          </Grid>

          {/*Divider*/}
          <Grid item xs={12}>
            <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
          </Grid>
          
          <Grid container className={classes.textSection}>
            <Grid item xs={12} className={classes.textContainer}>
              <Typography variant="body1" color="primary">
                Sidan uppdateras löpande med information..
              </Typography>
            </Grid>
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