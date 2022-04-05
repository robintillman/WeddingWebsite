import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    //Validation
    if(!guestName) {
      console.log('Namn måste anges!'); 
      return;
    }

    if(guestName === "") {
      console.log('Namn måste anges!'); 
      return;
    }

    if(!guestEmail) {
      console.log('E-post måste anges!'); 
      return;
    }

    if(guestEmail === "") {
      console.log('E-post måste anges!'); 
      return;
    }

    if (!pattern.test(guestEmail)) {
      console.log('Var god ange en korrekt e-postadress!'); 
      return;
    }

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
      <Grid item xs={12}>
        <Typography variant="h3" color="secondary" className={classes.container}>
            O.S.A.
        </Typography>
        <Grid item xs={12}>
          <Divider className={classes.divider}/>
        </Grid>
      </Grid>
      <Grid className="body" item xs={12}>
        <form
          className={classes.container}
          onSubmit={sendEmail}
        >
          <div className="contact-box">
            <Grid item xs={12}>
              <span className="details">Namn</span>
            </Grid>
            <Grid item xs={12}>
              <input 
                type="text"
                className="field"
                placeholder="T.ex: Anna Karlsson, Kalle Jansson och Claes Månsson"
                name="guestName"
                onChange={event => setGuestName(event.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <span className="details">E-post</span>
            </Grid>
            <Grid item xs={12}>
              <input 
                type="email"
                className="field"
                placeholder=""
                name="guestEmail"
                onChange={event => setGuestEmail(event.target.value)}
                required 
              />
            </Grid>
            <Grid item xs={12}>
              <span className="details">Övrigt meddelande</span>
            </Grid>
            <Grid item xs={12}>
              <textarea
                className="field"
                placeholder="Allergier, specialkost, matpreferenser, etc."
                name="message"
              />
            </Grid>
            <div className="hrContainer">
              <Grid item xs={12}>
                <span className="details">
                  Det finns möjlighet att bo kvar på det 4-stjärninga hotellet (inkl. frukost) till ett förmånligt pris.
                  <br/><br/>
                  Isabella & Robin kommer att återkomma till alla intresserade med förslag på rum och pris.
                  <br/><br/>
                  Är du intresserad?
                </span>
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
                  <label htmlFor="radio1">Jag är intresserad!</label>
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
                  <label htmlFor="radio2">Nej, tack!</label>
                </div>
              </Grid>
            </div>
            <Grid item xs={12}>
              <input
                type="submit"
                className="btn"
                value="Skicka"
              />
            </Grid>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}

export default RsvpPage
