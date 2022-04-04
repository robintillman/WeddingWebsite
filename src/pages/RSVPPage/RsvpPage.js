import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, Typography, Grid, Divider } from '@material-ui/core';
import './RsvpPage.css';
import './RadioButton.css';

const styles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
      marginBottom: '15px',
      marginTop: '10px'
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
      <Grid item xs={12}>
        <Divider className={classes.divider}/>
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
            <div className="hrContainer">
              <Grid item xs={12}>
                <span className="details">Är du intresserad av hotellrum till förmånligt pris?</span>
              </Grid>
              <Grid item xs={12}>
                <div class="inputGroup">
                  <input id="radio1" name="radio" type="radio" checked />
                  <label for="radio1">Jag är intresserad!</label>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div class="inputGroup">
                  <input id="radio2" name="radio" type="radio"/>
                  <label for="radio2">Nej, tack!</label>
                </div>
              </Grid>
            </div>
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
