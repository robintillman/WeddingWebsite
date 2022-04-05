import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    }
});

function RsvpSubmitPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={0} container>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.container}>
                    Vi har tagit emot ditt svar!
                </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" className={classes.container}>
                    Vi ses i september, en kopia av svaret har skickats till din mail!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default RsvpSubmitPage
