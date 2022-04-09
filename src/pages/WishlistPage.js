import React from 'react';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wishContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
});

function WishlistPage() {
    const classes = styles();
    
    return (
        <Grid item spacing={2} container>
            <Grid item xs={12}>
                <Typography variant="h2" color="secondary" className={classes.container}>
                    Önskelista
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider className={classes.divider}/>
            </Grid>
            <Grid item xs={12} className={classes.wishContainer} container>
                <Grid item xs={12} className={classes.text} container>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="primary">
                            Resebidrag
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" color="primary">
                            Om ni vill ge något är det vi önskar oss mest av allt bidrag till vår bröllopsresa.
                            Ni kan ge ett bidrag genom att..            
                            <br/><br/>
                            Sätta över på vårat gemensamma konto:<br/><i>8242-0, 3 958 081-6</i>               
                            <br/><br/>
                            Swisha till Isabella:<br/><i>0735 06 86 57</i>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider className={classes.divider}/>
            </Grid>
        </Grid>
    )
}

export default WishlistPage
