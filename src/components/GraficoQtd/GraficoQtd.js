import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

//CSS
import '../../components/GraficoQtd/GraficoQtd.css'

export default class GraficoQtd extends Component {

    render() {
        const data = {
            labels: ['Gorduras','Carboidratos','Proteinas'],
            datasets: [
                {
                    data: [300, 50, 100],
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