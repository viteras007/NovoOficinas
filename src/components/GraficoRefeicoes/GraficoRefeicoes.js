import React, { Component } from 'react';

import {Chart} from 'primereact/chart';

// CSS
import '../../components/GraficoRefeicoes/GraficoRefeicoes.css';

export default class GraficoRefeicoes extends Component {

    render() {
        const data = {
            labels: ['Café da Manhã','Almoço','Lanches', 'Janta'],
            datasets: [
                {
                    data: [30, 20, 10, 40],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#85e86a"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#85e86a"
                    ]
                }]    
            };

        return (
            <div className="">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Refeiçoes Realizadas</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="doughnut" data={data} />
                </div>
            </div>
        )
    }
}