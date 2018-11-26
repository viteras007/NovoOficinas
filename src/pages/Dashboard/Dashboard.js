// React
import React, { Component } from 'react';
import { ProgressBar } from 'primereact/progressbar';


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

  constructor() {
    super();
    this.state = {
      calorias: 35,
      caloriatotal: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/caloriatotal', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idusuario: JSON.parse(localStorage.getItem('user')).Id,
      })
    })
    .then(response => response.json())
    .then(caloria => {this.setState({caloriatotal: parseFloat(caloria.toFixed(2))})})
  }

  render() {
    return (
      <div>

        <div className='container'>
          <div className="container dashboardGraphics">
            <p className="titulo">Calorias</p>
            <ProgressBar value={this.state.calorias} />
            <label className="subtitulo">Qtd de Calorias Diárias: {this.state.caloriatotal}</label>
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