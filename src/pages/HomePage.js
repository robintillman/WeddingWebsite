import React from 'react';

import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';


function HomePage() {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper>
                    <Typography variant="h6" color="secondary">
                        VI SKA GIFTA OSS!
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Isabella & Robin
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        17 september 2022
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
  )
}

export default HomePage
