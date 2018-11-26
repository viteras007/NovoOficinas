import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class LineChartDemo extends Component {
    constructor() {
        super();
        this.state = {
            calorias: 0,
            progressopeso: [],
            progressodata: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/progressouser', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                idusuario: JSON.parse(localStorage.getItem('user')).Id,
            })
        })
        .then(response => response.json())
        .then(progresso => { 

            new Promise((resolve, reject) => {
                let arraypeso = [];
                let arraydata = [];

                for(let i = 0; i < progresso.length; i++ ){
                    arraypeso.push(progresso[i].peso);
                    arraydata.push(progresso[i].data);
                }

                this.setState(
                    {
                        progressopeso: arraypeso,
                        progressodata: arraydata
                    }
                );

            });
        })
    }

    render() {


        const data = {
            labels: this.state.progressodata,
            datasets: [
                {
                    label: 'Desempenho',
                    data: this.state.progressopeso,
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