import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import './RsvpPage.css';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function RsvpPage() {
  const classes = styles();

  function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm("service_z38l2zw", "template_w1958lb", e.target, "DP2X8Kpvf3NRfG83Y")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

      e.target.reset();
  }

  return (
    <Grid item spacing={0} container>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.container}>
            O.S.A.
        </Typography>
      </Grid>
      <Grid className="body" item xs={12}>
        <form onSubmit={sendEmail} className={classes.container}>
          <div className="contact-box">
            <Grid item xs={12}>
              <span className="details">Namn</span>
            </Grid>
            <Grid item xs={12}>
              <input type="text" className="field" placeholder="Namn på samtliga gäster" name="name" required />
            </Grid>
            <Grid item xs={12}>
              <span className="details">Önskar betala för hotellrum</span>
            </Grid>
            <Grid item xs={12}>
              <input type="checkbox" className="checkbox" name="doWantHotelRoom" />
            </Grid>
            <Grid item xs={12}>
              <span className="details">E-postadress</span>
            </Grid>
            <Grid item xs={12}>
              <input type="text" className="field" placeholder="E-post" name="email" required />
            </Grid>
            <Grid item xs={12}>
              <span className="details">Telefonnummer</span>
            </Grid>
            <Grid item xs={12}>
              <input type="text" className="field" placeholder="Telefonnummer" name="phonenumber" required />
            </Grid>
            <Grid item xs={12}>
              <span className="details">Övrigt meddelande</span>
            </Grid>
            <Grid item xs={12}>
              <textarea placeholder="Allergier, specialkost, etc." className="field" name="message" />
            </Grid>
            <Grid item xs={12}>
              <input type="submit" className="btn" value="Skicka" />
            </Grid>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default RsvpPage
