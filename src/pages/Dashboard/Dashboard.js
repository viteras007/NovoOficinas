// React
import React, { Component } from 'react';
import {ProgressBar} from 'primereact/progressbar';


// Component
import DashboardNavBar from "../../components/DashBoardNavBar/DashBoardNavBar";
import GraficoMacros from "../../components/GraficoProgressoMacros/GraficoProgressoMacros";
import GraficoRefeicoes from "../../components/GraficoRefeicoes/GraficoRefeicoes";
import GraficoQtd from "../../components/GraficoQtd/GraficoQtd";
import GraficoDesempenho from "../../components/GraficoDesempenho/GraficoDesempenho";

//CSS
import '../../pages/Dashboard/Dashboard.css'


// para pegar os dados
//console.log(JSON.parse(sessionStorage.getItem('user')));

export default class Dashboard extends Component {

  constructor(){
     super();
     this.state = {
       calorias: 35,
     }    
   }

  render() {
    return (
      <div>
        
        <div className='container'>
          <div className="container dashboardGraphics">
            <p className="titulo">Calorias</p>
            <ProgressBar value={this.state.calorias}  />
            <label className="subtitulo">Qtd de Calorias Diárias: </label>
          </div>
          <div className="container dashboardGraphics">
            <GraficoQtd></GraficoQtd>
          </div>
          <div className="container dashboardGraphics">
            <GraficoMacros></GraficoMacros>
          </div>
          <div className="container dashboardGraphics">
            <GraficoRefeicoes></GraficoRefeicoes>
          </div>
          <div className="container dashboardGraphics">
            <GraficoDesempenho></GraficoDesempenho>
          </div>
        </div>
      </div>
    )
  }
}