import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import MarriagePage from './pages/MarriagePage';
import DinnerPartyPage from './pages/DinnerPartyPage';
import WishlistPage from './pages/WishlistPage';
import RsvpPage from './pages/RsvpPage';
import PageNotFound from './pages/PageNotFound';

const styles = makeStyles({
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  minimalSpace: {
    marginTop: "1rem",
  }
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <Container>
        <Grid container spacing={2} direction="column">
          {/* Header */}
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Grid>

          <BrowserRouter>
            {/* Navbar */}
            <Grid item xs={12} container>
              <NavBar />
            </Grid>

            <Grid item xs={12}>
              <Divider />
            </Grid>

            {/* Main content */}
            <Grid item xs={12} container>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/valkommen" element={<HomePage />} />
                <Route exact path="/vigsel" element={<MarriagePage />} />
                <Route exact path="/middagochfest" element={<DinnerPartyPage />} />
                <Route exact path="/onskelista" element={<WishlistPage />} />
                <Route exact path="/osa" element={<RsvpPage />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Grid>
          </BrowserRouter>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* Footer */}
          <Grid item xs={12} container>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
