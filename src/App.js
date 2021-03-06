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
    super();           
    this.state = {
      logado: 'false'  
    }          
    //this.funclogado();
    console.log(this.state.logado)
    console.log(localStorage.getItem('logado'))
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
    if(!localStorage.getItem('logado')){
      localStorage.setItem('logado', 'false')
    }         
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)                
  }



  render() {
    //console.log("LOGADO: "+localStorage.getItem('logado'))        
    if (localStorage.getItem('logado') === 'false'){
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

    }else if (localStorage.getItem('logado') === 'true'){
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
    else{
      return (<h1>404 NOT FOUND</h1>);
    }
  }
}

export default App;
