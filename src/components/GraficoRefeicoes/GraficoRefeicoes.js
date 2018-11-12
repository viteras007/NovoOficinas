import React, { Component } from 'react';

import {Chart} from 'primereact/chart';

// CSS
import '../../components/GraficoRefeicoes/GraficoRefeicoes.css';

export default class GraficoRefeicoes extends Component {

    render() {
        const data = {
            labels: ['Carboidrato','Proteina','Gordura'],
            datasets: [
                {
                    data: [30, 20, 10],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                    ]
                }]    
            };

        return (
            <div className="">
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Quantidade Ingerida no Dia</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Chart type="doughnut" data={data} />
                </div>
            </div>
        )
    }
}