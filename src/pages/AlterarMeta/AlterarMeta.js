// React
import React, { Component } from 'react';

// Component
import { RadioButton } from 'primereact/radiobutton';
import { Panel } from 'primereact/panel';

//CSS
import '../../pages/AlterarMeta/AlterarMeta.css'


export default class AlterarMeta extends Component {

    constructor() {
        super();
        this.state = {
            Altura: '',
            Peso: '',
            Meta: '',
            Idade: ''
        }
    }

    onSubmitAltera = () => {
        fetch('http://localhost:3001/alterauser', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: JSON.parse(sessionStorage.getItem('user')).Id,
                height: this.state.Altura,
                weight: this.state.Peso,
                goal: this.state.Meta,
                idade: this.state.Idade
            })
        })
            .then(response => response.json())
            .then(alert('ALTERADO COM SUCESSO'))

    }
    render() {
        return (
            <div>
                <div className="conteudo container containerprincipal">
                    <form>
                        <p className="h4 text-center mb-4 titulo">Alterar Meta</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Meta Atual</label>
                        <input
                            type="text"
                            id="MetaAtual"
                            className="form-control"
                            value="eee" readOnly
                        />
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
                            <button
                                className="espacamento btn btn-unique botaoAlterar"
                                type="submit"
                                onClick={this.onSubmitAltera}>
                                Confirmar Alteração
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}