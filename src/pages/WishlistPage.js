import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wishContainer: {
        textAlign: 'center'
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    },
    text: {
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
});

function WishlistPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={2} container>

            {/*Title*/}
            <Grid item xs={12} className={classes.container}>
                <Typography variant="h2" color="secondary" className={classes.titleText}>
                    Önskelista
                </Typography>
            </Grid>

            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>

            {/*Text*/}
            <Grid item xs={12} className={classes.container}>
                <Typography variant="h3" color="primary" className={classes.subtitleText}>
                    Resebidrag
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" color="primary" className={classes.wishContainer}>
                    Om ni vill ge något är det vi önskar oss mest av allt bidrag till vår bröllopsresa.
                    Ni kan ge ett bidrag genom att..            
                    <br/><br/>
                    Banköverföring till vårat gemensamma konto:<br/>8242-0, 3 958 081-6            
                    <br/><br/>
                    Swisha till Isabella:<br/>0735 06 86 57
                </Typography>
            </Grid>

            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} className={classes.divider}/>
            </Grid>
        </Grid>
    )
}

export default WishlistPage
