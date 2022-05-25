import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import New from './components/New';
import Contact from './components/Contact';
import Exhibition from './components/Exhibition';
import Blog from './components/Blog';

import MarblePageID from './pages/MarblePageID';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc',
    },
    secondary: {
      main: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Products/" component={Products} />
          <Route exact path="/Products/:slug" component={MarblePageID} />
          <Route exact path="/New/" component={New} />
          <Route exact path="/Exhibition/" component={Exhibition} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact/" component={Contact} />
        </Switch>
        <Footer />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
