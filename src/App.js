import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MarriagePage from './pages/MarriagePage';
import DinnerPartyPage from './pages/DinnerPartyPage';
import WishlistPage from './pages/WishlistPage';
import RsvpPage from './pages/RSVPPage/RsvpPage';
import RsvpSubmitPage from './pages/RSVPPage/RsvpSubmitPage';
import PageNotFound from './pages/PageNotFound';

const theme = createTheme({
    palette: {
      primary: {
        main:"#000000",
      },
      secondary: {
        main:"#bfbfbf",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/valkommen" element={<HomePage />} />
                        <Route exact path="/vigsel" element={<MarriagePage />} />
                        <Route exact path="/middagochfest" element={<DinnerPartyPage />} />
                        <Route exact path="/onskelista" element={<WishlistPage />} />
                        <Route exact path="/osa" element={<RsvpPage />} />
                        <Route exact path="/osa/tack" element={<RsvpSubmitPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
