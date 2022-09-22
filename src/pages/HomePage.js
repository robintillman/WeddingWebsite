import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
import ControlledCarousel from '../components/ControlledCarousel';
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
    titleText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: '96px',
        "@media (max-width: 751px)": {
            fontSize: '12vw'
        }
    },
    nameText: {
        fontSize: '60px',
        "@media (max-width: 620px)": {
            fontSize: '9vw'
        }
    },
    goldHeart: {
        height: '55px', 
        width: '55px',
        "@media (max-width: 620px)": {
            height: '8vw', 
            width: '8vw',
        }
    },
    dateText: {
        fontSize: '48px',
        "@media (max-width: 620px)": {
            fontSize: '8vw'
        }
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5px'
    },
    controlledCarousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        marginTop: '1rem'
    }
});
  
function HomePage() {
    const classes = styles();
    
    return (
        <Grid item spacer={0} container>
            {/*Title*/}
            <Grid item xs={12} className={classes.titleContainer} container>
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography variant="h1" color="secondary" className={classes.titleText}>
                        Tack för en oförglömlig dag!
                    </Typography>
                </Grid>
            </Grid>
            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>
            {/*Main content*/}
            <Grid item xs={12} className={classes.container} container>
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography variant="h2" color="primary" className={classes.nameText}>
                        Isabella
                    </Typography>
                    <img 
                        src={goldHeart}
                        alt="Gold heart"
                        className={classes.goldHeart}
                    />
                    <Typography variant="h2" color="primary" className={classes.nameText}>
                        Robin
                    </Typography>
                </Grid>

                {/*Carousel*/}
                <Grid item xs={12} className={classes.controlledCarousel} container>
                    <ControlledCarousel />
                </Grid>
                
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography variant="h3" color="primary" className={classes.dateText}>
                        17 september 2022
                    </Typography>
                </Grid>
            </Grid>
            
            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>
        </Grid>
    )
}

export default HomePage
