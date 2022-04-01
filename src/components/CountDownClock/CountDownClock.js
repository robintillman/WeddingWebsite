import React, { useEffect, useRef, useState } from 'react'
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
        <section className="timer-container">
            <section  className="timer">
                <div>
                    <section>
                        <p>{timerDays}</p>
                        <p><small>Dagar</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <p><small>Timmar</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <p><small>Minuter</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <p><small>Sekunder</small></p>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default CountDownClock
