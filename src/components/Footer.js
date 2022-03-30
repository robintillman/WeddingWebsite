import React from 'react'

import { makeStyles, Divider, Box, Container, Grid, Paper } from '@material-ui/core';

import WeddingCountdown from './WeddingCountdown';

function Footer() {
    return (
        <Footer>
            <Box>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Divider /> 
                        </Grid>
                    </Grid>
                    
                    <WeddingCountdown /> 
                </Container>
            </Box>
        </Footer>
    )
}

export default Footer
