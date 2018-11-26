import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

//CSS
import '../../components/GraficoQtd/GraficoQtd.css'

export default class GraficoQtd extends Component {    
    constructor() {
        super();
        this.state = {
          gordura: 0,
          proteina: 0,
          carboidrato: 0
        }
      }
    
    componentDidMount(){        
        fetch('http://localhost:3001/dietamacros', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              idusuario: JSON.parse(localStorage.getItem('user')).Id,
            })
          })
          .then(response => response.json())
          .then(dieta => {
              this.setState({
                  gordura: parseFloat(dieta.gordura.toFixed(1)),
                  proteina: parseFloat(dieta.proteina.toFixed(1)),
                  carboidrato: parseFloat(dieta.carboidrato.toFixed(1))
              })
          })
    }

    render() {
        const data = {
            labels: ['Gorduras','Carboidratos','Proteinas'],
            datasets: [
                {
                    data: [this.state.gordura, this.state.carboidrato, this.state.proteina],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Macro-Nutrientes</h1>
                        <p className="conteudo">Quantidade de Macro-Nutrientes a ser ingerida diariamente</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="pie" data={data} />
                </div>
            </div>
        )
    }
}