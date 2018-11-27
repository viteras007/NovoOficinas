// React
import React, { Component } from 'react';

// Component
import { RadioButton } from 'primereact/radiobutton';
import { Panel } from 'primereact/panel';
import { BrowserRouter as  Router, Route, Link } from "react-router-dom";

//CSS
import '../../pages/AlterarMeta/AlterarMeta.css'


export default class AlterarMeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Altura: '',
            Peso: '',
            Meta: '',
            Idade: ''
        }
    }


    onSubmitAltera = () => {
                
        fetch('http://localhost:3001/progresso', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({                
                peso: JSON.parse(localStorage.getItem('user')).weight,
                idusuario: JSON.parse(localStorage.getItem('user')).Id
            })
        })
            .then(response => response.json())
            .then(console.log("progresso salvo!"))

        fetch('http://localhost:3001/alterauser', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: JSON.parse(localStorage.getItem('user')).Id,
                height: this.state.Altura,
                weight: this.state.Peso,
                goal: this.state.Meta,
                idade: this.state.Idade
            })
        })
            .then(response => response.json())
            .then(alert('ALTERADO COM SUCESSO'))


        let val
        if (JSON.parse(localStorage.getItem('user')).sexo === 'F') {
            val = (655.1 + (9.5 * this.state.Peso) + (1.8 * this.state.Altura) - (4.7 * this.state.Idade)) * 1.2;

        }
        if (JSON.parse(localStorage.getItem('user')).sexo === 'M') {
            val = (655.5 + (13.8 * this.state.Peso) + (5 * this.state.Altura) - (6.8 * this.state.Idade)) * 1.2;
        }
        let proteinaDieta = (0.2 * val) / 4;
        let carboidratoDieta = (0.6 * val) / 4;
        let gorduraDieta = (0.2 * val) / 9;

        fetch('http://localhost:3001/criardieta', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                caloria: val,
                proteina: proteinaDieta,
                carboidrato: carboidratoDieta,
                gordura: gorduraDieta,
                idusuario: JSON.parse(localStorage.getItem('user')).Id
            })
        })
            .then(response => response.json())
            .then(alert('INSERIDO COM SUCESSO'))

        
    }



    render() {
        return (
            <div>
                <div className="conteudo container containerprincipal">
                    <form>
                        
                        <Panel header="Qual sua Idade Atual?" className="espacamento">
                            <input
                                type="text"
                                id="IdadeAtual"
                                className="form-control"
                                placeholder="Idade Atual"
                                onChange={(event) => { this.setState({ Idade: event.target.value }) }}
                            />
                        </Panel>
                        <Panel header="Qual seu Peso Atual em Kg?" className="espacamento">
                            <input
                                type="text"
                                id="PesoAtual"
                                className="form-control"
                                placeholder="Peso Atual"
                                onChange={(event) => { this.setState({ Peso: event.target.value }) }}
                            />
                        </Panel>
                        <Panel header="Qual sua Altura Atual em cm?" className="espacamento">
                            <input
                                type="text"
                                id="AlturaAtual"
                                className="form-control"
                                placeholder="Altura Atual"
                                onChange={(event) => { this.setState({ Altura: event.target.value }) }}
                            />
                        </Panel>
                        <Panel header="Meta a atingir em Kg" className="espacamento">
                            <input
                                type="text"
                                id="AlturaAtual"
                                className="form-control"
                                placeholder="Meta"
                                onChange={(event) => { this.setState({ Meta: event.target.value }) }}
                            />
                        </Panel>

                        <div className="text-center mt-5 ">
                        <Link to="/">
                            <button
                                className="espacamento btn btn-unique botaoAlterar"
                                type="submit"
                                onClick={this.onSubmitAltera}>
                                Confirmar Alteração
                            </button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}