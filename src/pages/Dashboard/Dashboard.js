// React
import React, { Component } from 'react';
import { ProgressBar } from 'primereact/progressbar';


// Component
import DashboardNavBar from "../../components/DashBoardNavBar/DashBoardNavBar";
import GraficoMacros from "../../components/GraficoProgressoMacros/GraficoProgressoMacros";
import GraficoRefeicoes from "../../components/GraficoRefeicoes/GraficoRefeicoes";
import GraficoQtd from "../../components/GraficoQtd/GraficoQtd";
import GraficoDesempenho from "../../components/GraficoDesempenho/GraficoDesempenho";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//CSS
import '../../pages/Dashboard/Dashboard.css'


// para pegar os dados
//console.log(JSON.parse(sessionStorage.getItem('user')));

export default class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      iddieta: '',
      calorias: 0.001, //porcentagem
      carbototaldia: 0,
      proteintotaldia: 0,
      gordtotaldia: 0,
      caloriastotalrefeicao: 0,
      // CALCULO calorias: caloriatotal(dieta)-(somar todas calorias do banco no id do usuario caloriatotal(refeicao))/100
      // 
      caloriatotal: 0
    }
  }
  componentDidUpdate() {

  }

  componentDidMount() {
    
    //pegar o id da dieta
    fetch('http://localhost:3001/dietatotal', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idusuario: JSON.parse(localStorage.getItem('user')).Id,
      })
    })
      .then(response => response.json())
      .then(dieta => {
        this.setState({
          iddieta: dieta.id
        }, () => {
          fetch('http://localhost:3001/refeicaototal', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              iddieta: this.state.iddieta
            })
          })
            .then(response => response.json())
            .then(refeicao => {              
              let totalcaloria = 0
              let carboidratoTotalDia = 0
              let gorduraTotalDia = 0
              let proteinaTotalDia = 0
              for (let i = 0; i < refeicao.length; i++) {
                totalcaloria += refeicao[i].caloria; 
                carboidratoTotalDia += refeicao[i].carboidrato              
                gorduraTotalDia += refeicao[i].gordura
                proteinaTotalDia += refeicao[i].proteina
              }              
              
              this.setState({
                caloriastotalrefeicao: totalcaloria,
                carbototaldia: carboidratoTotalDia,
                gordtotaldia: gorduraTotalDia,
                proteintotaldia: proteinaTotalDia
              }, () => {})
              let porcentagemcaloria = parseFloat((this.state.caloriastotalrefeicao / this.state.caloriatotal) *100 ).toFixed(2)          
              this.setState({
                calorias: porcentagemcaloria
              }, () => { console.log("calorias:"+this.state.calorias)})
            })

        })
      })

    //setar caloria total da dieta
    fetch('http://localhost:3001/caloriatotal', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idusuario: JSON.parse(localStorage.getItem('user')).Id,
      })
    })
      .then(response => response.json())
      .then(caloria => {
        this.setState({
          caloriatotal: parseFloat(caloria.toFixed(2))
        })
      })
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
            <GraficoRefeicoes></GraficoRefeicoes>
          </div>
          <div className="container dashboardGraphics">
            <GraficoDesempenho></GraficoDesempenho>
          </div>
        </div>
      </div>
    );
  }
}