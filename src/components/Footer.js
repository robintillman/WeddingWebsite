import React from 'react'
import { makeStyles } from '@material-ui/core';
import CountDownClock from '../components/CountDownClock/CountDownClock';

const styles = makeStyles({
    container: {
        paddingTop: "3em",
        position: "relative",
        bottom: "0",
        width: "100%"
    }
});

function Footer() {
    const classes = styles();
    
    return (
        <div className="container">
            <CountDownClock />
        </div>
    )
}

export default Footer
