// React
import React, { Component } from 'react';

// Component


//CSS
import '../../pages/AlterarSenha/AlterarSenha.css'


export default class AlterarSenha extends Component {

  render() {
    return (
        <div>
        <div  className="container">
            <form>
                <p className="h4 text-center mb-4">Alterar Senha</p>
                <label htmlFor="senhaAtual" className="grey-text">Digite a senha atual</label>
                <input type="password" id="senhaAtual" className="form-control" />
                <br />
                <label htmlFor="novaSenha" className="grey-text">Digite a nova senha</label>
                <input type="text" id="novaSenha" className="form-control" />
                <br />
                <label htmlFor="confirmacaoSenha" className="grey-text">Digite novamente a nova senha</label>
                <input type="text" id="confirmacaoSenha" className="form-control" />
                <br />
                <div className="text-center mt-5 ">
                    <button className="btn btn-unique botaoAlterar" type="submit">Confirmar Alteração</button>
                </div>
                <br />
            </form>
        </div>
    </div>
    )
  }
}