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
    titleText: {
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
                <Grid item xs={12} className={classes.spacer} />
                <Grid item xs={12} className={classes.textContainer}>
                    <Typography variant="h3" color="primary" className={classes.dateText}>
                        17 september 2022
                    </Typography>
                </Grid>
            </Grid>
            
            {/*Important info*/}
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Bröllopsdagen
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        14:30 - Vigsel i Norrtälje kyrka
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        <br/>Därefter beger sig samtliga gäster till Furusund Värdshus på eget bevåg - Se till att ha skjuts eller bil!
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        <br/>På Fursund Värdshus väntar canapéer & bubbel och det finns även tid för er som bokat hotellrum att checka in.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                        <br/>3-rättersmiddag beräknas starta ca kl.18:00.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.infoContainer} container>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Klädsel - Kavaj
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" color="primary">
                       Kostym respektive klänning eller kjol. 
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
