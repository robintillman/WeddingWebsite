import React from 'react';

import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

function PageNotFound() {
  return (
    <Grid container spacing={0}>
        <Grid item xs={12}>
            <Paper>
                <Typography variant="h6" color="secondary">
                    ERROR 404 - PAGE NOT PageNotFound
                </Typography>
            </Paper>
        </Grid>
    </Grid>
  )
}

export default PageNotFound
