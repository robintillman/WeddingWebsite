import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import Map from '../components/Map/Map';
import RobertImage from '../resources/images/img_avatar.png';
import SophiaImage from '../resources/images/img_avatar2.png';
import EmailImage from '../resources/images/email_black.svg';

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

function ToastPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            {/*Title*/}
            <Grid item xs={12} className={classes.container}>
                <Typography variant="h2" color="secondary" className={classes.titleText}>
                    Toastmadame & toastmaster
                </Typography>
            </Grid>

            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>

            {/*Text*/}
            <Grid item xs={12} className={classes.textContainer}>
                <Typography variant="body1" color="primary">
                    Våra värdar för kvällen heter Sophia & Robert och det är dessa personer som ska se till att allt flyter på hela kvällen.
                    Det är även Sophia & Robert man vänder sig till om man vill hålla tal, vilket man ska anmäla i förväg.
                </Typography>
            </Grid>

            {/*Toastmaster & Toastmadame - Profiles*/}
            <Grid container spacing={5}>
                
                {/*Sophia*/}
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
                    {/*<Grid item xs={12} className={classes.textContainer}>
                        <Typography variant="body1" color="primary">
                            Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
                        </Typography>
                    </Grid>*/}
                </Grid>

                {/*Robert*/}
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
                    {/*<Grid item xs={12} className={classes.textContainer}>
                        <Typography variant="body1" color="primary">
                            Mauris pharetra convallis diam, fringilla efficitur sapien. Sed congue tellus ut ultricies luctus. Vestibulum in ligula lobortis, tempor elit eget, placerat odio. Vestibulum ultrices condimentum odio et maximus. Sed efficitur tellus nec nisl vulputate tempus nec et orci.
                        </Typography>
                    </Grid>*/}
                </Grid>
            </Grid>
            
            {/*Föranmäl tal*/}
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
                  onClick={()=> window.open("mailto:sschavon@gmail.com", "_blank")}
                />
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

            {/*Map
            <Grid item xs={12} className={classes.mapContainer}>
                <Map lat={59.65916} lng={18.91605} />
            </Grid>*/}
        </Grid>
    )
}


export default ToastPage;