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
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: '5px'
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
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>
            {/*Main content*/}
            <Grid item xs={12} className={classes.container} container>
                <Grid item xs={12} className={classes.mdTextContainer}>
                    <Typography variant="h2" color="primary">
                        Isabella
                    </Typography>
                    <img 
                        src={goldHeart}
                        style={{ height: 55, width: 55 }}
                        alt="Gold heart"
                    />
                    <Typography variant="h2" color="primary">
                        Robin
                    </Typography>
                </Grid>            
                <Grid item xs={12} md={4} className={classes.xsTextContainer}>
                    <Typography variant="h2" color="primary">
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
                    <Typography variant="h2" color="primary" className={classes.xsTextContainer}>
                        Robin
                    </Typography>
                </Grid>
                <Grid item xs={12} className={classes.spacer} />
                <Grid item xs={12} className={classes.mdTextContainer}>
                    <Typography variant="h3" color="primary">
                        17 september 2022
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" color="primary" className={classes.xsTextContainer}>
                        17
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} className={classes.textContainer}>
                    <Typography variant="h3" color="primary" className={classes.xsTextContainer}>
                        september
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" color="primary" className={classes.xsTextContainer}>
                        2022
                    </Typography>
                </Grid>
            </Grid>
            
            {/*Important info*/}
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        O.S.A.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        Senast 17 juli 2022<br/>
                        O.S.A. via denna hemsida eller kontakta Isabella & Robin direkt
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Klädsel - Mörk kostym
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        Mörk kostym respektive knälång klänning eller kjol. 
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Barn
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        Vi önskar att man ordnar barnvakt både för vigseln samt för festen & middagen
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Fotografering
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        En fotograf kommer att finnas på plats under vigseln och brudskålen.<br/>Kontakta oss om ni inte vill vara med på bild.
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={12} className={classes.container}>
                <Typography variant="body1" color="primary">
                    <i>Sidan uppdateras löpande, håll utkik för senaste info!</i>
                </Typography>
            </Grid>

            {/*Divider*/}
            <Grid item xs={12}>
                <Divider style={{ background: 'black' }} variant="middle" className={classes.divider}/>
            </Grid>
        </Grid>
    )
}

export default HomePage
