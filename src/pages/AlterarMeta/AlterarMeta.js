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
        <div  className="conteudo container containerprincipal">
            <form>
                <p className="h4 text-center mb-4 titulo">Alterar Meta</p>
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Meta Atual</label>
                <input type="text" id="MetaAtual"  className="form-control" value="eee" readOnly />
                <Panel header="Qual seu Peso Atual em Kg?" className="espacamento">
                    <input type="text" id="PesoAtual"  className="form-control" placeholder="Peso Atual" />
                </Panel>
                <Panel header="Qual sua Altura Atual em cm?" className="espacamento">
                    <input type="text" id="AlturaAtual"  className="form-control" placeholder="Altura Atual"  />
                </Panel>
                <Panel header="Meta a atingir em Kg" className="espacamento">
                    <input type="text" id="AlturaAtual"  className="form-control" placeholder="Altura Atual"  />
                </Panel>
                
                <div className="text-center mt-5 ">
                        <button className="espacamento btn btn-unique botaoAlterar" type="submit" onClick={() => {
                        alert("Alteração feita com sucesso!") }}>Confirmar Alteração</button>
                </div>
            </form>
        </div>
    </div>
    )
  }
}