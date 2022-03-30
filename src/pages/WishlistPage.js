import React from 'react';

import { Typography, makeStyles, Grid, Paper } from '@material-ui/core';

function WishlistPage() {
    return (
      <Grid container spacing={0}>
          <Grid item xs={12}>
              <Paper>
                  <Typography variant="h6" color="secondary">
                      Önskelista
                  </Typography>
              </Paper>
          </Grid>
      </Grid>
    )
}

export default WishlistPage
