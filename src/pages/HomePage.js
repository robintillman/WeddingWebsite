import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
import goldHeart from '../resources/images/goldheart.svg';

const styles = makeStyles({
    spacer: {
        height: '5vh'
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '2rem'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5rem',
        marginBottom: '5rem'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    xsTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (min-width: 576px)": {
          display: 'none'
        }
    },
    mdTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 575px)": {
          display: 'none'
        }
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    }
});
  
function HomePage() {
    const classes = styles();
    
    return (
        <Grid item spacer={0} container>
            {/*Title*/}
            <Grid item xs={12} className={classes.titleContainer} container>
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography variant="h1" color="secondary">
                        Vi gifter oss
                    </Typography>
                </Grid>
            </Grid>
            {/*Divider*/}
            <Grid item xs={12}>
                <Divider className={classes.divider}/>
            </Grid>
            {/*Main content*/}
            <Grid item xs={12} className={classes.container} container>
                <Grid item xs={12} className={classes.mdTextContainer}>
                    <Typography variant="h3" color="primary">
                        Isabella
                    </Typography>
                    <img 
                        src={goldHeart}
                        style={{ height: 55, width: 55 }}
                        alt="Gold heart"
                    />
                    <Typography variant="h3" color="primary">
                        Robin
                    </Typography>
                </Grid>            
                <Grid item xs={12} md={4} className={classes.xsTextContainer}>
                    <Typography variant="h3" color="primary">
                        Isabella
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} className={classes.xsTextContainer}>
                    <img 
                        src={goldHeart}
                        style={{ height: 55, width: 55 }}
                        alt="Gold heart"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" color="primary" className={classes.xsTextContainer}>
                        Robin
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.spacer} />
                <Grid item xs={12} className={classes.mdTextContainer}>
                    <Typography variant="h4" color="primary">
                        17 september 2022
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" color="primary" className={classes.xsTextContainer}>
                        17
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} className={classes.textContainer}>
                    <Typography variant="h4" color="primary" className={classes.xsTextContainer}>
                        september
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h4" color="primary" className={classes.xsTextContainer}>
                        2022
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.container}>
                <Typography variant="subtitle1" color="primary">
                    <i>Sidan uppdateras löpande, håll utkik för senaste info!</i>
                </Typography>
            </Grid>

            {/*Divider*/}
            <Grid item xs={12}>
                <Divider className={classes.divider}/>
            </Grid>
        </Grid>
    )
}

export default HomePage
