import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import New from './components/New';
import Contact from './components/Contact';
import Exhibition from './components/Exhibition';
import Blog from './components/Blog';
import HallProvider from './Context';
import MarblePageID from './pages/MarblePageID';



function App() {



  return (
    <HallProvider>
    <React.Fragment>
        <NavBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Products/" component={Products}/>
            <Route exact path="/Products/:slug" component={MarblePageID}/>
            <Route exact path="/New/" component={New}/>
            <Route exact path="/Exhibition/" component={Exhibition}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact path="/Contact/" component={Contact}/>
          </Switch>
          <Footer/>
    </React.Fragment>

    </HallProvider>
  );
}

export default App;
