// React
import React, { Component } from 'react';

// Component
import DashboardNavBar from "../../components/DashBoardNavBar/DashBoardNavBar";
import GraficoMacros from "../../components/GraficoProgressoMacros/GraficoProgressoMacros";
import GraficoRefeicoes from "../../components/GraficoRefeicoes/GraficoRefeicoes";

//CSS
import '../../pages/Dashboard/Dashboard.css'


// para pegar os dados
//console.log(JSON.parse(sessionStorage.getItem('user')));

export default class Dashboard extends Component {

  render() {
    return (
      <div>
        
        <div className='container'>
          <div className="container dashboardGraphics">
            <GraficoMacros></GraficoMacros>
          </div>
          <div className="container dashboardGraphics">
            <GraficoRefeicoes></GraficoRefeicoes>
          </div>
        </div>
      </div>
    )
  }
}