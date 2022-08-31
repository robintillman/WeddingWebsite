import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import MarriagePage from './pages/MarriagePage';
import DinnerPartyPage from './pages/DinnerPartyPage';
import ToastPage from './pages/ToastPage';
import HotelPage from './pages/HotelPage';
import WishlistPage from './pages/WishlistPage';
import PageNotFound from './pages/PageNotFound';

const theme = createTheme({
    palette: {
      primary: {
        main:"#000000",
      },
      secondary: {
        main:"#9c7c38",
        opacity: ""
      }
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        'Berkshire Swash'
      ].join(','),
      //Välkommen-titel
      h1: {
        fontFamily: 'Parisienne'
      },
      //Alla titlar utom välkommen
      h2: {
        fontFamily: 'Berkshire Swash',
      },
      //Startsida - underrubriker
      h3: {
        fontFamily: 'Berkshire Swash',
      },
      //Nedräknaren
      h4: {
        fontFamily: 'Berkshire Swash',
      },
      //Nedräknaren
      h6: {
        fontFamily: 'Berkshire Swash',
      },
      //brödtext
      body1: {
        fontFamily: 'Raleway',
        fontSize: '16px' //Standard 16px
      },
      //specialtext
      body2: {
        fontFamily: 'Raleway',
        fontSize: '14px' //Standard 14px
      },
      //navbar
      caption: {
        fontFamily: 'Raleway',
        fontSize: '18px', //Standard 12px
      },
      //O.S.A - Formulärtext
      subtitle1: {
        fontFamily: 'Raleway',
        fontSize: '16px' //Standard 16px
      },
      //Footer-text
      subtitle2: {
        fontFamily: 'Raleway',
        fontSize: '16px' //Standard 16px
      }
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
              <Route exact path="/middagochfest/program" element={<DinnerPartyPage />} />
              <Route exact path="/middagochfest/toast" element={<ToastPage />} />
              <Route exact path="/middagochfest/boende" element={<HotelPage />} />
              <Route exact path="/onskelista" element={<WishlistPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    )
}

export default App;
