import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles, Typography, Grid } from '@material-ui/core';

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
      <Grid item xs={12}>
        <form onSubmit={sendEmail} className={classes.container}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Namn" name="name" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="email" className="form-control" placeholder="E-post" name="email" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="text" className="form-control" placeholder="Telefonnummer" name="phonenumber" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Allergier, specialkost, etc." name="message" />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input type="submit" className="btn btn-info" value="Skicka" />
            </div>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default RsvpPage
