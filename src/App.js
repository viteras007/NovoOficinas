import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Components
import IndexNavBar from "../src/components/IndexNavBar/IndexNavBar";
import DashboardNavbar from "../src/components/DashBoardNavBar/DashBoardNavBar";

// Index Pages
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Sobre from "./pages/Sobre/Sobre";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// DashBoard Pages
import AlterarSenha from "./pages/AlterarSenha/AlterarSenha"
import DashBoardPage from "./pages/Dashboard/Dashboard";
import AlterarNome from "./pages/AlterarNome/AlterarNome";
import AlterarMeta from "./pages/AlterarMeta/AlterarMeta";
import AdicionarAlimento from "./pages/AdicionarAlimento/AdicionarAlimento";
import BuscarALimento from "./pages/BuscarAlimento/BuscarAlimento";



// React
import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Rota: 'a'
      // ADD OS DADOS DO USUARIO PARA RECEBER DA PAGINA LOGIN QUANDO ELE ESTIVER LOGADO

    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)                
  }

  // mais ou menos isso para fazer mudar a rota
  handleLanguage = (novarota) => {
    this.setState({Rota: novarota});
  }

  render() {
    if(this.state.Rota === "home"){
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
            <DashboardNavbar></DashboardNavbar> 
            <Route exact path="/" component={DashBoardPage}/> 
            <Route path="/alterarsenha" component={AlterarSenha}/>
            <Route path="/alterarnome" component={AlterarNome}/>
            <Route path="/alterarmeta" component={AlterarMeta}/>
            <Route path="/adicionaralimento" component={AdicionarAlimento}/>
            <Route path="/buscaralimento" component={BuscarALimento}/>
          </div>
        </Router>
      );
    }
  }
}

export default App;
