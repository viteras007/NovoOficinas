import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default class LineChartDemo extends Component {

    render() {
        const data = {
            labels: ['01/02', '02/03', '20/04', '05/05', '15/06', '17/07', '02/08', '22/08', '12/10', '30/11'],
            datasets: [
                {
                    label: 'Desempenho',
                    data: [61, 59, 80, 81, 40, 55, 40, 22, 70, 10, 5],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                }
            ]   
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Desempenho de Peso</h1>
                    </div>
                </div>
                <div className="content-section implementation">
                    <Chart type="line" data={data} />

                </div>
            </div>
        )
    }
}