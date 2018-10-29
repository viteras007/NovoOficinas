// React
import React, { Component } from 'react';

// Component


//CSS
import '../../pages/AlterarNome/AlterarNome.css'


export default class AlterarNome extends Component {

  render() {
    return (
        <div>
            <div className="container">
                <form>
                    <p className="h4 text-center mb-4">Alterar Nome de Usuário</p>
                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Digite o nome atual</label>
                    <input type="password" id="defaultFormRegisterNameEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Digite o novo nome</label>
                    <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">Digite novamente o novo nome</label>
                    <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
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