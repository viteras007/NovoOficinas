// React
import React, { Component } from 'react'

//CSS
import "../../pages/PaginaInicial/PaginaInicial.css";



//Components
import {Panel} from 'primereact/panel';

export default class PaginaInicial extends Component {
  render() {
    return (
      <div className="bodyindex">
        <title>Index</title>
          <div className="imgborder">
            <img src={require('../../images/teste.jpg')} alt="imagem"></img>
          </div>
          <div>
          <div className="container-fluid container2">
            <h4>Sobre o site</h4>
              <div className="container">
              <Panel header="SOBRE NÓS" style={{marginTop:'2em'}} toggleable={true}>
                Nosso site monta sua dieta, dá sugestões de porções de alimentos e seus 
                respectivos macronutrientes e calorias para que você possa ter noção de 
                qual alimento encaixar em sua dieta, montamos um grafico mostrando seu 
                desempenho dia-a-dia, o quanto emagreceu ou ganhou peso, e periodizamos 
                suas refeiçoes para que não sinta fome durante algum certo período do dia
              </Panel>
            </div>
          </div>


          <div className="container-fluid container1">
            <h4>Nossos Valores</h4>
            <div className="container">
              <Panel className="col-lg-5 col-md-5" header="OBJETIVOS" style={{marginTop:'2em'}} toggleable={true}>
                Nosso objetivo principal é montar sua dieta e mostrarmos que não é dificil 
                obter resultados comendo bem e sem realizar uma dieta muito restritiva.
              </Panel>
              <div className="col-lg-1 col-md-1"/>
              <Panel className="col-lg-5 col-md-5" header="COMO VEMOS" style={{marginTop:'2em'}} toggleable={true}>
                Nossa visão é de que voce pode se alimentar bem sem abrir mão de 
                todos os alimentos que você gosta, mostrando que para obter resultados, você só 
                precisa comer na medida certa, e fazer você enxergar que para atingir sua meta alguns 
                alimentos devem ser priorizados com relação a outro
              </Panel>
            </div>
          </div>

          <div className="container-fluid container3">
            <h4 className='titlecontainer'>Serviços</h4>
            <div className="container">
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-off logo-small"></span>
                <h5>Energia</h5>
                <p>Alimentar-se da maneira correta pode dar mais energia durante o dia</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-apple logo-small"></span>
                <h5>Comer bem</h5>
                <p>Comer o que gosta na medida certa, sem dietas muito rigorosas e restritivas</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-calendar logo-small"></span>
                <h5>Periodização</h5>
                <p>Dividir a quantidade de refeiçoes feitas diariamente para fique mais facil de realizar as refeiçoes</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-scale logo-small"></span>
                <h5>Objetivos</h5>
                <p>Montamos a dieta de acordo com seus objetivos e metas</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-stats logo-small"></span>
                <h5>Visualização</h5>
                <p>Montamos gráficos para facilitar a visualização de seu desempenho</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 subcontainer">
              <span class="glyphicon glyphicon-ok-circle logo-small"></span>
                <h5>Trabalho Duro</h5>
                <p>Com persistencia e trabalho duro os resultados aparecem</p>
              </div>
            </div>
          </div> 
          </div>      
      </div>
    );
  }
}