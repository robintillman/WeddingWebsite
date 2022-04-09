import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { makeStyles, Typography, Grid, Divider, TextField } from '@material-ui/core';
import './RadioButton.css';

const styles = makeStyles({
  container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
  },
  formContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  infoBoxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #5F8575',
    borderRadius: '5px',
    paddingTop: '1rem',
    paddingBottom: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    marginBottom: '2rem'
  },
  divider: {
    marginBottom: '15px',
    marginTop: '10px'
  },
  infoBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1rem'
  },
  textField: {
    marginTop: "1rem"
  },
  hrContainer: {
    border: "1px solid #5F8575",
    borderRadius: "5px",
    padding: "15px",
    marginBottom: "1rem",
    marginTop: "1rem"
  },
  formButton: {
    width: "100%",
    padding: "0.5rem 1rem",
    backgroundColor: "#5F8575;",
    color: "#f9f9f9",
    border: "none",
    outline: "none",
    cursor: "pointer",
    transition: ".3s",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#7aac97"
    }
  }
});  

function RsvpPage() {
  const classes = styles();
  const navigate = useNavigate();
  const [guestEmail, setGuestEmail] = useState('');
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  function sendEmail(e) {
    e.preventDefault();

    //Send email
    emailjs.sendForm("service_myj5piw", "template_w1958lb", e.target, "DP2X8Kpvf3NRfG83Y")
        .then((result) => {
            console.log('Success...', result.text);
            navigate('/osa/tack');
        }, (error) => {
            console.log('Error...', error.text);
        });

    e.target.reset();
  }

  return (
    <Grid item spacing={0} container>
      {/*Title*/}
      <Grid item xs={12}>
        <Typography variant="h2" color="secondary" className={classes.container}>
            O.S.A.
        </Typography>
      </Grid>

      {/*Divider*/}
      <Grid item xs={12}>
        <Divider className={classes.divider}/>
      </Grid>

      <Grid item md={1} />
      <Grid item xs={12} md={10} className={classes.formContainer} container>
        <form
          className={classes.container}
          onSubmit={sendEmail}
        >
          <div>
            {/*Infobox*/}
            <Grid item xs={12} className={classes.infoBoxContainer} container>
              <Grid item xs={12} className={classes.infoBox}>
                <Typography variant="caption" color="primary">
                  <b>O.S.A. senast 17 juli 2022</b>
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.infoBox}>
                <Typography variant="caption" color="primary">
                  Det går även bra att O.S.A. via mail eller telefon till Robin eller Isabella
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.infoBox}>
                <Typography variant="caption" color="primary">
                  Vill du hålla tal? Alla tal måste anmälas i förväg till toastmaster & toastmadame
                </Typography>
              </Grid>
            </Grid>

            {/*Form*/}
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="secondary">
                <TextField 
                  required
                  fullWidth
                  variant="outlined"
                  label="Namn"
                  className={classes.textField}
                  placeholder="T.ex: Anna Karlsson, Kalle Jansson och Claes Månsson"
                  name="guestName"
                />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary">
                <TextField 
                  required
                  fullWidth
                  variant="outlined"
                  label="E-post"
                  className={classes.textField}
                  name="guestEmail"
                  onChange={event => setGuestEmail(event.target.value)}
                  error={guestEmail !== "" && (!pattern.test(guestEmail))}
                  helperText={guestEmail !== "" && (!pattern.test(guestEmail)) ? 'Felaktig e-postadress' : ' '}
                />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary">
                <TextField
                  multiline
                  fullWidth
                  minRows={6}
                  variant="outlined"
                  label="Övrigt meddelande"
                  className={classes.textField}
                  placeholder="Allergier, specialkost, matpreferenser, etc."
                  name="message"
                />
              </Typography>
            </Grid>
            <div className={classes.hrContainer}>
              <Grid item xs={12} className={classes.container}>
                <Typography variant="body1" color="primary" className={classes.container}>
                    Det finns möjlighet att bo kvar på det 4-stjärninga hotellet (inkl. frukost) till ett förmånligt pris.<br/>
                    Isabella & Robin kommer att återkomma till alla intresserade med förslag på rum och pris.
                    <br/><br/>
                    Är ni intresserade?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div className="inputGroup">
                  <input
                    type="radio"
                    id="radio1"
                    name="doWantHotelRoom"
                    value="Jag är intresserad!"
                    defaultChecked 
                  />
                  <label htmlFor="radio1">
                    <Typography variant="subtitle1">
                      Jag är intresserad!
                    </Typography>
                  </label>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="inputGroup">
                  <input 
                    type="radio"
                    id="radio2"
                    name="doWantHotelRoom"
                    value="Nej, tack!"
                    />
                  <label htmlFor="radio2">
                    <Typography variant="subtitle1">
                      Nej, tack!
                    </Typography>
                  </label>
                </div>
              </Grid>
            </div>
            <Grid item xs={12}>
              <button type="submit" className={classes.formButton}>
                <Typography variant="subtitle1">
                  Skicka
                </Typography>
              </button>
            </Grid>
          </div>
        </form>
      </Grid>
      <Grid item md={1} />

      {/*Divider*/}
      <Grid item xs={12}>
        <Divider className={classes.divider}/>
      </Grid>
    </Grid>
  )
}

export default RsvpPage
