import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Components
import ObservatorioMenu from "./components/ObservatorioMenu/ObservatorioMenu";


// Pages
import IndicadorInst from "./pages/IndicadorInst/IndicadorInst";
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sobre from "./pages/Sobre/Sobre";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// React
import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ObservatorioMenu></ObservatorioMenu>                    
          <Route exact path="/" component={PaginaInicial}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          {/*<Route path="/indicadorinst" component={IndicadorInst}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
