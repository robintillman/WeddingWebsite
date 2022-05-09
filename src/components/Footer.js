import React from 'react'
import { makeStyles, Grid, Divider, Typography } from '@material-ui/core';
import CountDownClock from './CountDownClock';
import phoneImage from '../resources/images/phone_white.svg';
import emailImage from '../resources/images/email_white.svg';

const styles = makeStyles({
    container: {
        bottom: 0,
        width: '100%',
        color: 'white',
        backgroundColor: '#ba5625',
        paddingTop: '2rem',
        paddingBottom: '3rem'
    },
    contactInfoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '2rem'
    },
    contactInfo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactIcon: {
        marginLeft: '5px',
        "&:hover": {
          cursor: "pointer"
        }
    }
});

function Footer() {
    const classes = styles();
    
    return (
        <Grid item xs={12} className={classes.container} container>
            
            {/*Divider*/}
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Divider className={classes.Divider} variant="middle" style={{ background: "white" }} />
            </Grid>
            <Grid item xs={1} />

            {/*Countdown clock*/}
            <CountDownClock />

            {/*Divider*/}
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Divider className={classes.Divider} variant="middle" style={{ background: "white" }} />
            </Grid>
            <Grid item xs={1} />

            {/*Contact information*/}
            <Grid item xs={12} md={4}  className={classes.contactInfoContainer} container>
                <Grid item xs={12} className={classes.contactInfo}>
                    <Typography variant="subtitle2">
                        Isabella
                    </Typography>
                    <img 
                        src={phoneImage}
                        style={{ height: 25, width: 25 }}
                        onClick={()=> window.open("tel:+46735068657", "_blank")}
                        className={classes.contactIcon}
                        alt="Phone"
                    />
                    <img 
                        src={emailImage}
                        style={{ height: 25, width: 25 }}
                        onClick={()=> window.open("mailto:isabellasundell@live.se", "_blank")}
                        className={classes.contactIcon}
                        alt="Email"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}  className={classes.contactInfoContainer} container>
                <Grid item xs={12} className={classes.contactInfo}>
                    <Typography variant="subtitle2">
                        Robin
                    </Typography>
                    <img 
                        src={phoneImage}
                        style={{ height: 25, width: 25 }}
                        onClick={()=> window.open("tel:+46729776874", "_blank")}
                        className={classes.contactIcon}
                        alt="Phone"
                    />
                    <img 
                        src={emailImage}
                        style={{ height: 25, width: 25 }}
                        onClick={()=> window.open("mailto:robin.tillman92@gmail.com", "_blank")}
                        className={classes.contactIcon}
                        alt="Email"
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}  className={classes.contactInfoContainer} container>
                <Grid item xs={12} className={classes.contactInfo}>
                    <Typography variant="subtitle2">
                        Toastmaster & toastmadame
                    </Typography>
                    <img 
                        src={emailImage}
                        style={{ height: 25, width: 25 }}
                        onClick={()=> window.open("mailto:sschavon@gmail.com", "_blank")}
                        className={classes.contactIcon}
                        alt="Email"
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer
