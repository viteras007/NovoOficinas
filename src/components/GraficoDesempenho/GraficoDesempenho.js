import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class LineChartDemo extends Component {
    constructor() {
        super();
        this.state = {
            calorias: 0,
            progressopeso: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/progressouser', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                idusuario: JSON.parse(sessionStorage.getItem('user')).Id,
            })
        })
        .then(response => response.json())
        .then(progresso => { 

            for(let i = 0; i < progresso.lenght; i++){
                this.state.progressopeso.push(progresso[i]);
            }
            /*
            this.state.progressopeso.push(progresso[0])
            this.state.progressopeso.push(progresso[1])
            this.state.progressopeso.push(progresso[2])*/
        })
        console.log(this.state.progressopeso)
    }

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