import React, { Component } from 'react';

import { Chart } from 'primereact/chart';

// CSS
import '../../components/GraficoRefeicoes/GraficoRefeicoes.css';

export default class GraficoRefeicoes extends Component {
    constructor() {
        super();
        this.state = {
            iddieta: '',
            calorias: 0.001,
            carbototaldia: 0,
            proteintotaldia: 0,
            gordtotaldia: 0,
            caloriastotalrefeicao: 0,
            caloriatotal: 0
        }
    }

    componentDidMount() {
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
                            }, () => { })
                            let porcentagemcaloria = parseFloat((this.state.caloriatotal + this.state.caloriastotalrefeicao) / 100).toFixed(2)
                            this.setState({
                                calorias: porcentagemcaloria
                            }, () => { console.log(this.state) })
                        })

                })
            })

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
        const data = {
            labels: ['Carboidrato', 'Proteina', 'Gordura'],
            datasets: [
                {
                    data: [this.state.carbototaldia, this.state.proteintotaldia, this.state.gordtotaldia],
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