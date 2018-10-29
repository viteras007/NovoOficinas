import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Components
import IndexNavBar from "../src/components/IndexNavBar/IndexNavBar";

// Pages
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sobre from "./pages/Sobre/Sobre";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import Dashbard from "./pages/Dashboard/Dashboard";




// React
import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Route: 'l'
    }
  }
  render() {
    if(this.state.Route === "home"){
      return (
        <Router>
          <div>
            <IndexNavBar></IndexNavBar>                    
            <Route exact path="/" component={PaginaInicial}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </div>
        </Router>
      );
    }else{
      return (
        <Router>
          <div>    
            <Dashbard></Dashbard>                 
          </div>
        </Router>
      );
    }
  }
}

export default App;
