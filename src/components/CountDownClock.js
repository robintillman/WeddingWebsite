import React, { useEffect, useRef, useState, } from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core';

const styles = makeStyles({
    container: {
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    unit: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function CountDownClock() {
    const classes = styles();
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 17, 2022 14:30:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = now - countdownDate;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        const intervalRef = interval.current
        startTimer();
        return () => {
            clearInterval(intervalRef);
        };
    }, []);

    return (
        <Grid item xs={12} spacing={2} className={classes.container} container>
            <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.unit}>
                        {timerDays}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.unit}>
                        Dagar
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.unit}>
                        {timerHours}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.unit}>
                        Timmar
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.unit}>
                        {timerMinutes}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.unit}>
                        Minuter
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={6} md={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.unit}>
                        {timerSeconds}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.unit}>
                        Sekunder
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.unit}>
                        ..har passerat sedan bröllopsdagen
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CountDownClock
