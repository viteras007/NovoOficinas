import React, { Component } from 'react';

import ProgressBar from 'react-bootstrap/lib/ProgressBar';

// CSS
import '../../components/GraficoProgressoMacros/GraficoProgressoMacros.css';

export default class GraficoProgressoMacros extends Component {

	constructor(props) {
        super(props);
        this.state = {
            proteina: '30',
            gordura: '40',
            carboidrato: '50',
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
        const { proteina, gordura, carboidrato } = this.state;
		return (
            <div >
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Progresso de Diário</h1>
                    </div>
                </div>
                <div>
                    <p className="conteudo">Proteína</p><ProgressBar now={proteina} label={`${proteina}%`} />
                    <p className="conteudo">Gordura</p><ProgressBar now={gordura} label={`${gordura}%`} />
                    <p className="conteudo">Carboidrato</p><ProgressBar now={carboidrato} label={`${carboidrato}%`} />
                </div>
            </div>
		)
	}
}