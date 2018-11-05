// React
import React, { Component } from 'react';

// Component
import {RadioButton} from 'primereact/radiobutton';
import {Panel} from 'primereact/panel';

//CSS
import '../../pages/AlterarMeta/AlterarMeta.css'


export default class AlterarMeta extends Component {

    constructor(){
        super();
        this.state = {
            valorMetaAtual:'',
            valorProximaMeta:'',
        }
      }
  render() {
    return (
        <div>
        <div  className="container">
            <form>
                <p className="h4 text-center mb-4">Alterar Meta</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Meta Atual</label>
                <input type="text" id="MetaAtual"  className="form-control" value="eee" readOnly />
                <Panel header="Atingiu sua meta atual?" className="espacamento">
                    <RadioButton value="sim" name="atingiumeta" onChange={(e) => this.setState({valorMetaAtual: e.value})} checked={this.state.valorMetaAtual === 'sim'} /> Sim
                    <br />
                    <RadioButton value="nao" name="atingiumeta" onChange={(e) => this.setState({valorMetaAtual: e.value})} checked={this.state.valorMetaAtual === 'nao'} /> Não
                </Panel>
                <Panel header="Qual sua próxima meta?" className="espacamento">
                    <RadioButton value="perderpeso" name="proximameta" onChange={(e) => this.setState({valorProximaMeta: e.value})} checked={this.state.valorProximaMeta === 'perderpeso'} /> Perder Peso
                    <br />
                    <RadioButton value="manterpeso" name="proximameta" onChange={(e) => this.setState({valorProximaMeta: e.value})} checked={this.state.valorProximaMeta === 'manterpeso'} /> Manter Peso
                    <br />
                    <RadioButton value="ganharpeso" name="proximameta" onChange={(e) => this.setState({valorProximaMeta: e.value})} checked={this.state.valorProximaMeta === 'ganharpeso'} /> Ganhar Peso
                </Panel>
                <div className="text-center mt-5 ">
                        <button className="btn btn-unique botaoAlterar" type="submit" onClick={() => {
                        alert("Alteração feita com sucesso!") }}>Confirmar Alteração</button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}