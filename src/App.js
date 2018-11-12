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
import AlterarMeta from "./pages/AlterarMeta/AlterarMeta";
import AdicionarAlimento from "./pages/AdicionarAlimento/AdicionarAlimento";
import BuscarALimento from "./pages/BuscarAlimento/BuscarAlimento";


//CSS
import "./App.css";



// React
import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
   // sessionStorage.setItem('logado', false)
    super();
    sessionStorage.setItem('logado', false)
    this.state = {
      logado: false
      // ADD OS DADOS DO USUARIO PARA RECEBER DA PAGINA LOGIN QUANDO ELE ESTIVER LOGADO
    }    
  }

  
  
  
  funcaologar = (logou) =>{
    
      // nessa linha ele esta alterando o valor.. so que nao esta renderizando denovo..
      //this.state.logado = logou;

      // nessa linha ele não esta nem alterando o valor
      // this.setState.logado = logou;

      this.setState({
        logado: logou
      });      
  }
  
  componentDidMount(){
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)                
  }



  render() {
    if (this.state.logado === false){
      return (
        <Router>
          <div>
            <IndexNavBar></IndexNavBar>                    
            <Route exact path="/" component={PaginaInicial}/>
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/login" render={(props) => <Login {...props} logar={this.funcaologar} />}/>
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
