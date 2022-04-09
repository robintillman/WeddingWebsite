import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
      marginBottom: '5vh',
      marginTop: '10px'
    },
    spacer: {
        height: '5vh'
    }
});

function RsvpSubmitPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12}>
                <Typography variant="h3" color="secondary" className={classes.container}>
                    Vi har tagit emot ditt svar!
                </Typography>
            </Grid>

            <Grid item xs={12}>
              <Divider className={classes.divider}/>
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" color="primary" className={classes.container}>
                    Vi ses i september, en kopia av ditt svar har skickats till din mail!
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.spacer} />

            <Grid item xs={12}>
                <Typography variant="h5" color="primary" className={classes.container}>
                    Glöm inte att anmäla i förväg till toastmaster & toastmadame om du vill hålla tal!
                </Typography>
            </Grid>

            <Grid item xs={12} className={classes.spacer} />
        </Grid>
    )
}

export default RsvpSubmitPage
