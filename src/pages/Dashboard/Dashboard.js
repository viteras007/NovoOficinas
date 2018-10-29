// React
import React, { Component } from 'react';

// Component
import DashboardNavBar from "../../components/DashBoardNavBar/DashBoardNavBar";
import GraficoMacros from "../../components/GraficoProgressoMacros/GraficoProgressoMacros";
import GraficoRefeicoes from "../../components/GraficoRefeicoes/GraficoRefeicoes";

//CSS
import '../../pages/Dashboard/Dashboard.css'


export default class Dashboard extends Component {

  render() {
    return (
      <div>
        
        <div className='container'>
          <div className="">
            <GraficoMacros></GraficoMacros>
          </div>
          <div className="espacamento">
            <GraficoRefeicoes></GraficoRefeicoes>
          </div>
        </div>
      </div>
    )
  }
}