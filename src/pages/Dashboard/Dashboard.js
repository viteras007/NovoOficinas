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
        <DashboardNavBar></DashboardNavBar>
        <div className='col-lg-3 col-md-3'></div>
        <div className='col-lg-6 col-md-6 teste'>
          <GraficoMacros></GraficoMacros>
          <GraficoRefeicoes></GraficoRefeicoes>
        </div>
        <div className='col-lg-3 col-md-3'></div>
      </div>
    )
  }
}