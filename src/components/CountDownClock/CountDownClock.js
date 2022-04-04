import React, { useEffect, useRef, useState, } from 'react'
import { Typography, Grid } from '@material-ui/core';
import './CountDownClock.css';

function CountDownClock() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 17, 2022 14:30:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

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
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <section  className="timer">
            <Grid container>
                <Grid item md={2} />
                <Grid className="unit" item xs={12} md={2}>
                    <Typography>{timerDays}</Typography>
                    <Typography>Dagar</Typography>
                </Grid>
                <span></span>
                <Grid className="unit" item xs={12} md={2}>
                    <Typography>{timerHours}</Typography>
                    <Typography>Timmar</Typography>
                </Grid>
                <span></span>
                <Grid className="unit" item xs={12} md={2}>
                    <Typography>{timerMinutes}</Typography>
                    <Typography>Minuter</Typography>
                </Grid>
                <span></span>
                <Grid className="unit" item xs={12} md={2}>
                    <Typography>{timerSeconds}</Typography>
                    <Typography>Sekunder</Typography>
                </Grid>
                <Grid item md={2} />
            </Grid>
        </section>
    )
}

export default CountDownClock
